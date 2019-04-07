using System.Threading.Tasks;
using ML.Data.Abstraction;
using ML.Data.Abstraction.Repositories;
using ML.Data.FileSystem;
using ML.Data.PostgreSQL;

namespace ML.Data
{
    internal class DataUnitOfWork : IDataUnitOfWork
    {
        private readonly IPostgreSQLDataContext postgreSQLDataContext;
        private readonly IFileSystemDataContext fileSystemContext;

        public DataUnitOfWork(
            IPostgreSQLDataContext postgreSQLDataContext,
            IFileSystemDataContext fileSystemContext,
            IUserRepository userRepository)
        {
            this.postgreSQLDataContext = postgreSQLDataContext;
            this.fileSystemContext = fileSystemContext;
            UserRepository = userRepository;
        }

        public IUserRepository UserRepository { get; }

        public void SaveChanges()
        {
            throw new System.NotImplementedException();
        }

        public Task SaveChangesAsync()
        {
            throw new System.NotImplementedException();
        }
    }
}
