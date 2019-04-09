using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ML.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ML.Data.PostgreSQL.Configurations
{
    internal class TracksPlayListsConfiguration : IEntityTypeConfiguration<TracksPlayLists>
    {
        public void Configure(EntityTypeBuilder<TracksPlayLists> builder)
        {
            builder.HasKey(tp => new { tp.TrackId, tp.PlayListId });

            builder.HasOne<Track>(tp => tp.Track)
                .WithMany(track => track.TracksPlayLists)
                .HasForeignKey(tp => tp.TrackId);

            builder.HasOne<PlayList>(tp => tp.PlayList)
                .WithMany(playlist => playlist.TracksPlayLists)
                .HasForeignKey(tp => tp.PlayListId);
        }
    }
}
