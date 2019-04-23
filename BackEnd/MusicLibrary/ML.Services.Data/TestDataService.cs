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
    internal class TestDataService : ITestDataService
    {
        private readonly IDataUnitOfWork data;

        public TestDataService(IDataUnitOfWork dataUnitOfWork)
        {
            this.data = dataUnitOfWork;
        }

        public IEnumerable<Track> Test()
        {
            var tracks = this.data.TrackRepository.All();

            return tracks;
        }
    }
}
