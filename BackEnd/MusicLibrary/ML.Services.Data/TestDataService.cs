using ML.Data.Abstraction;
using ML.Data.Models;
using ML.Services.Abstraction;

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
            data.UserRepository.Add(new User());
            //data.SomeOtherRepoThatDontExistsYet.Add(new Something());

            // some other code that do stuff 

            data.SaveChanges();
        }
    }
}
