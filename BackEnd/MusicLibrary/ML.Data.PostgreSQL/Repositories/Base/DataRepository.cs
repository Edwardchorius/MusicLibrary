using ML.Data.Abstraction.Repositories.Base;
using ML.Data.Models.Abstraction;
using System;

namespace ML.Data.PostgreSQL.Repositories.Base
{
    internal abstract class DataRepository<T> : GenericRepository<T>, IDataRepository<T> where T : class, IDataModel
    {
        public DataRepository(IPostgreSQLDataContext context) : base(context)
        {
        }

        public T FindById(long id, bool isDeleted = false)
        {
            throw new NotImplementedException();
        }
    }
}
