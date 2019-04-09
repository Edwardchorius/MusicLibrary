using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

public static class DependencyRegistrations
{
    public static IServiceCollection RegisterDependencies(this IServiceCollection services)
    {
        services.RegisterFileSystemDependencies();
        services.RegisterPostgreSQLDependencies();
        services.RegisterDataDependencies();
        services.RegisterServicesDataDependencies();

        return services;
    }
}