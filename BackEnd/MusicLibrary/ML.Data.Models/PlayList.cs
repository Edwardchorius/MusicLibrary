using ML.Data.Models.Abstraction;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ML.Data.Models
{
    public class PlayList : BaseDataModel
    {
        [Required]
        public ulong OwnerId { get; set; }

        [Required]
        public User Owner { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int Duration { get; set; } //In seconds

        [Required]
        public string Description { get; set; }

        public ICollection<TracksPlayLists> TracksPlayLists { get; set; }
    }
}
