using Microsoft.Extensions.DependencyInjection;
using ML.Services.Abstraction;
using ML.Services.Data;

public static class DependencyRegistrations
{
    public static IServiceCollection RegisterServicesDataDependencies(this IServiceCollection services)
    {
        services.AddTransient<IDisplayService, DisplayService>();
        services.AddTransient<ICreateService, CreateService>();

        return services;
    }
}
