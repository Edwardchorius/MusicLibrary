using Microsoft.EntityFrameworkCore;
using ML.Data.Abstraction.Repositories;
using ML.Data.Models;
using ML.Data.PostgreSQL.Repositories.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ML.Data.PostgreSQL.Repositories
{
    internal class PlaylistRepository : DataRepository<PlayList>, IPlaylistRepository
    {
        private readonly IPostgreSQLDataContext context;
        private readonly DbSet<PlayList> set;

        public PlaylistRepository(IPostgreSQLDataContext context) : base(context)
        {
            this.context = context;
            this.set = context.Set<PlayList>();
        }

        public PlayList CreatePlaylist(string name, string description, ICollection<Track> tracks)
        {
            var owner = this.context.Users.Find(401);

            PlayList newPlaylist = new PlayList()
            {
                OwnerId = 401,
                Owner = owner,
                Name = name,
                Description = description,
                CreatedBy = "Admin",
                CreatedOn = DateTime.Now,
                TracksPlayLists = new List<TracksPlayLists>()
            };

            foreach (var track in tracks)
            {
                var manyToMany = new TracksPlayLists();
                manyToMany.PlayList = newPlaylist;
                var trackId = this.context.Tracks.FirstOrDefault(tr => tr.Name == track.Name).Id;
                manyToMany.TrackId = trackId;

                newPlaylist.TracksPlayLists.Add(manyToMany);
            }

            newPlaylist.Duration = tracks.Select(tr => tr.Duration).Sum();

            this.set.Add(newPlaylist);
            this.context.SaveChanges();

            return newPlaylist;
        }
    }
}
