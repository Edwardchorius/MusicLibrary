using ML.Data.Abstraction.Repositories.Base;
using ML.Data.Models;

namespace ML.Data.Abstraction.Repositories
{
    public interface IUserRepository : IDataRepository<User>
    {
        User FindByUsername(string part);
    }
}
