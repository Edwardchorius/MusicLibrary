using System;
using System.Collections.Generic;
using System.Text;

namespace ML.Data.Models
{
    public class TracksPlayLists
    {
        public ulong TrackId { get; set; }

        public ulong PlayListId { get; set; }

        public Track Track { get; set; }

        public PlayList PlayList { get; set; }
    }
}
