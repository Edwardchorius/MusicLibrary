using ML.Data.Abstraction;
using ML.Data.Models;
using ML.Data.Models.Enums;
using ML.Services.Abstraction;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace ML.Services.Data
{
    internal class DisplayService : IDisplayService
    {
        private readonly IDataUnitOfWork data;

        public DisplayService(IDataUnitOfWork dataUnitOfWork)
        {
            this.data = dataUnitOfWork;
        }

        public IEnumerable<Track> DisplayTracks(int page)
        {
            return this.data.TrackRepository.TakeByPage(page);
        }
    }
}
