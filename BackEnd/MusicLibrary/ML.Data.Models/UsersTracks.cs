using System;
using System.Collections.Generic;
using System.Text;

namespace ML.Data.Models
{
    public class UsersTracks
    {
        public ulong UserId { get; set; }

        public ulong TrackId { get; set; }

        public User User { get; set; }

        public Track Track { get; set; }
    }
}
