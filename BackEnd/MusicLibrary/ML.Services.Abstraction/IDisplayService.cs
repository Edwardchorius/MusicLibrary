using ML.Data.Models;
using System.Collections.Generic;

namespace ML.Services.Abstraction
{
    public interface IDisplayService
    {
        IEnumerable<Track> DisplayTracks(int page);
    }
}
