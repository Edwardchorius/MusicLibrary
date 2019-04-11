using ML.Data.Models.Abstraction;
using ML.Data.Models.Enums;
using System.ComponentModel.DataAnnotations;

namespace ML.Data.Models
{
    public class Wallet : BaseDataModel
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }

        [Required]
        public Currency Currency { get; set; }

        [Required]
        public decimal Balance { get; set; }
    }
}
