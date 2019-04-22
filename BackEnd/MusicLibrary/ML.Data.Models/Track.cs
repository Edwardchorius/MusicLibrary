using ML.Data.Models.Abstraction;
using ML.Data.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ML.Data.Models
{
    public class Track : BaseDataModel
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Author { get; set; }

        [Required]
        public string Performer { get; set; }

        [Required]
        public int Duration { get; set; } //In seconds

        [Required]
        public Genre Genre { get; set; }

        [Required]
        public decimal Cost { get; set; }

        public ICollection<UsersTracks> UsersTracks { get; set; }

        public ICollection<TracksPlayLists> TracksPlayLists { get; set; }
    }
}
