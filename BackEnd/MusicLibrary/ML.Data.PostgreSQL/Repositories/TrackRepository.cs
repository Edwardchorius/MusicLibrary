using ML.Data.Abstraction.Repositories;
using ML.Data.Models;
using ML.Data.PostgreSQL.Repositories.Base;
using System;
using System.Collections.Generic;
using System.Text;

namespace ML.Data.PostgreSQL.Repositories
{
    internal class TrackRepository : DataRepository<Track>, ITrackRepository
    {
        public TrackRepository(IPostgreSQLDataContext context) : base(context)
        {

        }
    }
}
