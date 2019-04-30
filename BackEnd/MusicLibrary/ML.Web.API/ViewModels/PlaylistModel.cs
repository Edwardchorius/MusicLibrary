using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ML.Web.API.ViewModels
{
    public class PlaylistModel
    {
        public TrackModel[] Tracks { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
