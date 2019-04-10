using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ML.Data.Abstraction.Repositories;
using ML.Data.PostgreSQL;
using ML.Data.PostgreSQL.Repositories;

public static class DependencyRegistrations
{
    public static IServiceCollection RegisterPostgreSQLDependencies(this IServiceCollection services)
    {
        services.AddTransient<IUserRepository, UserRepository>();
        services.AddTransient<IWalletRepository, WalletRepository>();
        services.AddTransient<IPostgreSQLDataContext, PostgreSQLDataContext>();

        services.AddEntityFrameworkNpgsql()
            .AddDbContext<PostgreSQLDataContext>()
            .BuildServiceProvider();
        
        return services;
    }
}