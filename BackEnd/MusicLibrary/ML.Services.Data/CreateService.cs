using ML.Data.Abstraction;
using ML.Data.Models;
using ML.Services.Abstraction;
using System;
using System.Collections.Generic;
using System.Text;

namespace ML.Services.Data
{
    internal class CreateService : ICreateService
    {
        private readonly IDataUnitOfWork data;

        public CreateService(IDataUnitOfWork dataUnitOfWork)
        {
            this.data = dataUnitOfWork;
        }

        public PlayList CreatePlaylist(string name, string description, ICollection<Track> tracks)
        {
            return this.data.PlaylistRepository.CreatePlaylist(name, description, tracks);
        }
    }
}
