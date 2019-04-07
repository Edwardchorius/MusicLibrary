using Microsoft.Extensions.DependencyInjection;
using ML.Data.FileSystem;

public static class DependencyRegistrations
{
    public static IServiceCollection RegisterFileSystemDependencies(this IServiceCollection services)
    {
        services.AddSingleton<IFileSystemDataContext, FileSystemDataContext>();

        return services;
    }
}