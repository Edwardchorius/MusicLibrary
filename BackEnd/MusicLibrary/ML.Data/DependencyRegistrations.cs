using Microsoft.Extensions.DependencyInjection;
using ML.Data;
using ML.Data.Abstraction;

public static class DependencyRegistrations
{
    public static IServiceCollection RegisterDataDependencies(this IServiceCollection services)
    {
        services.AddScoped<IDataUnitOfWork, DataUnitOfWork>();

        return services;
    }
}
