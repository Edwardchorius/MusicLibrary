using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ML.Services.Abstraction;
using Newtonsoft.Json;

namespace ML.Web.API.Controllers
{
    [Route("api/[controller]")] 
    public class ValuesController : Controller
    {
        private readonly ITestDataService service;

        public ValuesController(ITestDataService service)
        {
            this.service = service;
        }

        // GET api/values
        [HttpGet]
        public string Get()
        {
            var data = service.Test();

            string json = JsonConvert.SerializeObject(data);

            return json;
        }

        // POST api/values/5
        [HttpPost("{id}")]
        public string Get([FromBody]object id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post(string value)
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
    }
}
