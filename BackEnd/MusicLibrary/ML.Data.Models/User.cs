using ML.Data.Models.Abstraction;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ML.Data.Models
{
    public class User : BaseDataModel
    {
        public string Username { get; set; }

        [Required]
        public Wallet Wallet { get; set; }

        public ulong WalletId { get; set; }

        public IEnumerable<Track> Tracks { get; set; }

        public IEnumerable<PlayList> PlayLists { get; set; }

        public ICollection<UsersTracks> UsersTracks { get; set; }
    }
}
