using ML.Data.Abstraction.Repositories;
using ML.Data.Models;
using ML.Data.PostgreSQL.Repositories.Base;
using System;

namespace ML.Data.PostgreSQL.Repositories
{
    internal class UserRepository : DataRepository<User>, IUserRepository
    {
        public UserRepository(IPostgreSQLDataContext context) : base(context)
        {

        }

        public User FindByUsername(string part)
        {
            throw new NotImplementedException();
        }
    }
}
