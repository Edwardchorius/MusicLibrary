using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using ML.Data.Models;

namespace ML.Data.PostgreSQL
{
    public interface IPostgreSQLDataContext
    {
        int SaveChanges();
        DbSet<User> Users { get; set; }

        DbSet<Track> Tracks { get; set; }

        DbSet<Wallet> Wallets { get; set; }

        DbSet<PlayList> PlayLists { get; set; }
    }
}
