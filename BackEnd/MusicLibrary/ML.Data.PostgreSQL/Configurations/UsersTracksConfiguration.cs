using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ML.Data.Models;

namespace ML.Data.PostgreSQL.Configurations
{
    internal class UsersTracksConfiguration : IEntityTypeConfiguration<UsersTracks>
    {
        public void Configure(EntityTypeBuilder<UsersTracks> builder)
        {
            builder.HasKey(ut => new { ut.UserId, ut.TrackId });

            builder.HasOne<User>(ut => ut.User)
                .WithMany(u => u.UsersTracks)
                .HasForeignKey(ut => ut.UserId);

            builder.HasOne<Track>(ut => ut.Track)
                .WithMany(t => t.UsersTracks)
                .HasForeignKey(ut => ut.TrackId);
        }
    }
}
