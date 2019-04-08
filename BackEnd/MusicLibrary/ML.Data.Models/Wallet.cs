using ML.Data.Models.Abstraction;
using ML.Data.Models.Enums;
using System.ComponentModel.DataAnnotations;

namespace ML.Data.Models
{
    public class Wallet : BaseDataModel
    {
        public ulong UserId { get; set; }
        [Required]
        public User User { get; set; }

        [Required]
        public Currency Currency { get; set; }

        [Required]
        public decimal Balance { get; set; }
    }
}
