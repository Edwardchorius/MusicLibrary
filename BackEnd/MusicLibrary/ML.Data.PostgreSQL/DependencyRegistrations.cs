using Microsoft.Extensions.DependencyInjection;
using ML.Data.Abstraction.Repositories;
using ML.Data.PostgreSQL;
using ML.Data.PostgreSQL.Repositories;

public static class DependencyRegistrations
{
    public static IServiceCollection RegisterPostgreSQLDependencies(this IServiceCollection services)
    {
        services.AddSingleton<IPostgreSQLDataContext, PostgreSQLDataContext>();

        services.AddTransient<IUserRepository, UserRepository>();

        return services;
    }
}