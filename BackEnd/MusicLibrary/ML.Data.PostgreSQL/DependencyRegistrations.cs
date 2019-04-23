using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ML.Data.Abstraction.Repositories;
using ML.Data.PostgreSQL;
using ML.Data.PostgreSQL.Repositories;

public static class DependencyRegistrations
{
    public static IServiceCollection RegisterPostgreSQLDependencies(this IServiceCollection services)
    {
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<IWalletRepository, WalletRepository>();
        services.AddScoped<ITrackRepository, TrackRepository>();
        services.AddScoped<IPostgreSQLDataContext, PostgreSQLDataContext>();

        services.AddEntityFrameworkNpgsql()
            .AddDbContext<PostgreSQLDataContext>()
            .BuildServiceProvider();

        //var connectionString = "Host=localhost;Database=MLData;Username=postgres;Password=eduard.vaklinov_96";

        //services.AddEntityFrameworkNpgsql<PostgreSQLDataContext>(options => options
        //       //.UseLazyLoadingProxies()
        //       .UseSqlServer(connectionString, x => x.MigrationsAssembly("ML.Data.PostgreSQL")));

        return services;
    }
}