using System;
using System.Collections.Generic;
using System.Text;

namespace ML.Data.Models
{
    public class TracksPlayLists
    {
        public int TrackId { get; set; }
               
        public int PlayListId { get; set; }

        public Track Track { get; set; }

        public PlayList PlayList { get; set; }
    }
}
