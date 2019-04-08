using Microsoft.EntityFrameworkCore;
using ML.Data.Models;

namespace ML.Data.PostgreSQL
{
    internal class PostgreSQLDataContext : DbContext, IPostgreSQLDataContext
    {
        internal PostgreSQLDataContext(DbContextOptions<PostgreSQLDataContext> options)
            : base(options)
        {

        }

        public DbSet<User> Users { get; set; }

        public DbSet<Track> Tracks { get; set; }

        public DbSet<Wallet> Wallets { get; set; }

        public DbSet<PlayList> PlayLists { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            throw new System.NotImplementedException();
        }
    }
}
