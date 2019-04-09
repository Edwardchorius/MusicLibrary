using System;
using System.Collections.Generic;
using System.Text;

namespace ML.Data.Models
{
    public class UsersTracks
    {
        public int UserId { get; set; }

        public int TrackId { get; set; }

        public User User { get; set; }

        public Track Track { get; set; }
    }
}
