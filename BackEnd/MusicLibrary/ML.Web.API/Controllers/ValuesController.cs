using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ML.Services.Abstraction;

namespace ML.Web.API.Controllers
{
    [Route("api/[controller]")]
    [AutoValidateAntiforgeryToken]
    public class ValuesController : Controller
    {
        private readonly ITestDataService service;

        public ValuesController(ITestDataService service)
        {
            this.service = service;
        }

        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            var data = service.Test();

            return Json(data);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
            Console.WriteLine();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        private void Recursion(int number)
        {
            Console.WriteLine(number);

            if(number == 10)
            {
                return;
            }

            Recursion(number++);
        }
    }
}
