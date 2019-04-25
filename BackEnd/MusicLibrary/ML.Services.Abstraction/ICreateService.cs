using ML.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ML.Services.Abstraction
{
    public interface ICreateService
    {
        PlayList CreatePlaylist(string name, string description, ICollection<Track> tracks);
    }
}
