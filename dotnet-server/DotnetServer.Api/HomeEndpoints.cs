using System.Reflection;
using System.Text.Json;
using Microsoft.AspNetCore.Http;

namespace DotnetServer.Api;

public static class HomeEndpoints
{
    private static readonly JsonDocument SampleData = LoadSampleData();

    public static WebApplication MapHomeEndpoints(this WebApplication app)
    {
        app.MapGet("/api/home/options", () => TypedResults.Ok(GetSection("options")));
        app.MapGet("/api/home", () => TypedResults.Ok(GetSection("dashboard")));
        app.MapGet("/api/home/alerts/{alertType}", GetAlertTable);
        app.MapGet("/api/home/metrics/{metricType}", GetMetricTable);
        return app;
    }

    private static IResult GetAlertTable(string alertType) =>
        GetTable("alerts", alertType);

    private static IResult GetMetricTable(string metricType) =>
        GetTable("metrics", metricType);

    private static IResult GetTable(string section, string key)
    {
        if (SampleData.RootElement.GetProperty(section).TryGetProperty(key, out var value))
        {
            return TypedResults.Ok(value.Clone());
        }

        return TypedResults.NotFound();
    }

    private static JsonElement GetSection(string section) =>
        SampleData.RootElement.GetProperty(section).Clone();

    private static JsonDocument LoadSampleData()
    {
        using var stream = Assembly.GetExecutingAssembly()
            .GetManifestResourceStream("DotnetServer.Api.SampleData.json")
            ?? throw new InvalidOperationException("The embedded sample data resource was not found.");

        return JsonDocument.Parse(stream);
    }
}