using System.Collections.Generic;
using ML.Data.Abstraction.Repositories.Base;

namespace ML.Data.PostgreSQL.Repositories.Base
{
    internal abstract class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly IPostgreSQLDataContext context;

        public GenericRepository(IPostgreSQLDataContext context)
        {
            this.context = context;
        }

        public void Add(T entity)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<T> All()
        {
            throw new System.NotImplementedException();
        }

        public void Delete(T entity)
        {
            throw new System.NotImplementedException();
        }

        public void Update(T entity)
        {
            throw new System.NotImplementedException();
        }
    }
}
