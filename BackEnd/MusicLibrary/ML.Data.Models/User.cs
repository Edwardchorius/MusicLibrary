using ML.Data.Models.Abstraction;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ML.Data.Models
{
    public class User : BaseDataModel
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }

        public Wallet Wallet { get; set; }
        public int WalletId { get; set; }

        public IEnumerable<Track> Tracks { get; set; }

        public IEnumerable<PlayList> PlayLists { get; set; }

        public ICollection<UsersTracks> UsersTracks { get; set; }
    }
}
