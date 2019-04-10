using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ML.Data.Models;

namespace ML.Data.PostgreSQL.Configurations
{
    internal class PlayListConfiguration : IEntityTypeConfiguration<PlayList>
    {
        public void Configure(EntityTypeBuilder<PlayList> builder)
        {
            //builder.HasOne(pl => pl.Owner)
            //    .WithMany(u => u.PlayLists)
            //    .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
