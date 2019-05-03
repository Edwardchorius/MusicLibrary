using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ML.Data.Models;
using ML.Services.Abstraction;
using ML.Web.API.ViewModels;
using Newtonsoft.Json;

namespace ML.Web.API.Controllers
{
    [Route("api/[controller]")] 
    public class ValuesController : Controller
    {
        private readonly IDisplayService displayService;
        private readonly ICreateService createService;

        public ValuesController(IDisplayService displayService,
            ICreateService createService)
        {
            this.displayService = displayService;
            this.createService = createService;
        }

        // GET api/values
        [HttpGet]
        public string Get(string page)
        {
            var data = displayService.DisplayTracks(int.Parse(page));

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
        public void Post(PlaylistModel result)
        {
            var tracks = TransformViewModelToTracks(result.Tracks);
            var newPlaylist = createService.CreatePlaylist(result.Name, result.Description, tracks);
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

        [NonAction]
        public ICollection<Track> TransformViewModelToTracks(ICollection<TrackModel> viewModel)
        {
            List<Track> tracksToReturn = new List<Track>();

            foreach (var track in viewModel)
            {
                Track newTrack = new Track()
                {
                    Name = track.Name,
                    Author = track.Author,
                    Duration = track.Duration,
                    Cost = track.Cost,
                    Performer = track.Performer
                };

                tracksToReturn.Add(newTrack);
            }

            return tracksToReturn;
        }
    }
}
