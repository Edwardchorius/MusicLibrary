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
    internal class TrackRepository : DataRepository<Track>, ITrackRepository
    {
        private readonly IPostgreSQLDataContext context;
        private readonly DbSet<Track> set;
        public TrackRepository(IPostgreSQLDataContext context) : base(context)
        {
            this.context = context;
            this.set = context.Set<Track>();
        }

        public IEnumerable<Track> TakeByPage(int page)
        {
            int skipItems = 0;

            switch (page)
            {
                case 1: skipItems = 0; break;
                case 2: skipItems = 5; break;
                case 3: skipItems = 10; break;
            }

            var tracks = this.set
                .Skip(skipItems)
                .Take(5)
                .ToList();

            return tracks;
        }
    }
}
