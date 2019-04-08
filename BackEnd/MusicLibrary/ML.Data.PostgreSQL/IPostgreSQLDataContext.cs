
using Microsoft.EntityFrameworkCore;
using ML.Data.Models;

namespace ML.Data.PostgreSQL
{
    public interface IPostgreSQLDataContext
    {
        DbSet<User> Users { get; set; }

        DbSet<Track> Tracks { get; set; }

        DbSet<Wallet> Wallets { get; set; }

        DbSet<PlayList> PlayLists { get; set; }
    }
}
