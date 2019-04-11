using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ML.Data.Models;
using ML.Data.PostgreSQL.Configurations;


namespace ML.Data.PostgreSQL
{
    internal class PostgreSQLDataContext : DbContext, IPostgreSQLDataContext
    {
        public PostgreSQLDataContext(DbContextOptions<PostgreSQLDataContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        
        public DbSet<Wallet> Wallets { get; set; }

        public DbSet<Track> Tracks { get; set; }

        public DbSet<PlayList> PlayLists { get; set; }

        public IConfiguration Configuration { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new UsersTracksConfiguration());
            builder.ApplyConfiguration(new TracksPlayListsConfiguration());
            builder.ApplyConfiguration(new UserConfiguration());
            builder.ApplyConfiguration(new PlayListConfiguration());

            builder.ForNpgsqlUseSequenceHiLo();

            base.OnModelCreating(builder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Database=MLData;Username=postgres;Password=eduard.vaklinov_96"); // TODO => Should hide connection string !!!
        }
    }
}
