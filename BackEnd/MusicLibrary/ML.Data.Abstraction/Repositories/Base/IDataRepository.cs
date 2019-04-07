using ML.Data.Models.Abstraction;

namespace ML.Data.Abstraction.Repositories.Base
{
    public interface IDataRepository<T> : IGenericRepository<T> where T : class, IDataModel
    {
        T FindById(long id, bool isDeleted = false);
    }
}
