using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ML.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ML.Data.PostgreSQL.Configurations
{
    internal class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            //builder.HasOne(user => user.Wallet)
            //    .WithOne(wallet => wallet.User)
            //    .HasForeignKey<Wallet>(wallet => wallet.UserId)
            //    .OnDelete(DeleteBehavior.Cascade);

            //builder.HasMany(user => user.PlayLists)
            //    .WithOne(playlist => playlist.Owner)
            //    .HasForeignKey(user => user.OwnerId)
            //    .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
