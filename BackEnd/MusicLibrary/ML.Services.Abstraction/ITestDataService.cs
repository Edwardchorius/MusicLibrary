using ML.Data.Models;
using System.Collections.Generic;

namespace ML.Services.Abstraction
{
    public interface ITestDataService
    {
        IEnumerable<User> Test();
    }
}
