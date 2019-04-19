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

        public IEnumerable<User> Test()
        {
            var users = this.data.UserRepository.All();

            return users;
        }
    }
}
