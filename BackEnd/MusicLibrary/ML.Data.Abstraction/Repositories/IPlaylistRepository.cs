using ML.Data.Abstraction.Repositories.Base;
using ML.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ML.Data.Abstraction.Repositories
{
    public interface IPlaylistRepository : IDataRepository<PlayList>
    {
        PlayList CreatePlaylist(string name, string description, ICollection<Track> tracks);
    }
}
