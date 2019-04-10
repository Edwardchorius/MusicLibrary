using ML.Data.Abstraction.Repositories;
using System.Threading.Tasks;

namespace ML.Data.Abstraction
{
    public interface IDataUnitOfWork
    {
        IUserRepository UserRepository { get; }
        IWalletRepository WalletRepository { get; }

        int SaveChanges();
               
        Task SaveChangesAsync();
    }
}
