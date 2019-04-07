using System.Collections.Generic;

namespace ML.Data.Abstraction.Repositories.Base
{
    public interface IGenericRepository<T>
    {
        IEnumerable<T> All();

        void Add(T entity);

        void Update(T entity);

        void Delete(T entity);
    }
}
