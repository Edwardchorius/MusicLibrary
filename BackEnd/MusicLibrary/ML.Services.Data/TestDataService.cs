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

        public void Test()

        {

            var x = data.UserRepository.All().Count();
            Debug.WriteLine(x);

            var user = new User
            {
                Username = "demoUser",
                //Tracks = new List<Track>(),
                //PlayLists = new List<PlayList>(),
                //UsersTracks = new List<UsersTracks>(),
            };

            var wallet = new Wallet
            {
                Currency = Currency.EUR,
                Balance = 0,
                CreatedOn = DateTime.Now
            };

            //user.Wallet = wallet;
            //wallet.User = user;

            data.UserRepository.Add(user);
            //data.WalletRepository.Add(wallet);

            data.SaveChanges();

            var x2 = data.UserRepository.All().Count();
            Debug.WriteLine(x2);
        }
    }
}
