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
            IUserRepository userRepository,
            IWalletRepository walletRepository,
            ITrackRepository trackRepository)
        {
            this.postgreSQLDataContext = postgreSQLDataContext;
            this.fileSystemContext = fileSystemContext;
            this.UserRepository = userRepository;
            this.WalletRepository = walletRepository;
            this.TrackRepository = trackRepository;
        }

        public IUserRepository UserRepository { get; }
        public IWalletRepository WalletRepository { get; }
        public ITrackRepository TrackRepository { get; }
        
        public int SaveChanges()
        {
            return this.postgreSQLDataContext.SaveChanges();
        }

        public Task SaveChangesAsync()
        {
            throw new System.NotImplementedException();
        }
    }
}
