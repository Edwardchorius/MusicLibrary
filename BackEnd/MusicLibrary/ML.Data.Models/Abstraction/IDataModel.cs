using System;
using System.Collections.Generic;
using System.Text;

namespace ML.Data.Models.Abstraction
{
    public interface IDataModel
    {
        ulong Id { get; set; }

        string CreatedBy { get; set; }
        DateTime CreatedOn { get; set; }

        string ModifiedBy { get; set; }
        DateTime? ModifiedOn { get; set; }

        bool IsDeleted { get; set; }
        DateTime? DeletedOn { get; set; }
        string DeletedBy { get; set; }
    }
}
