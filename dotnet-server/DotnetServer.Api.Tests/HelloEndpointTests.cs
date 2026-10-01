using System.Net;
using System.Net.Http.Json;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc.Testing;

namespace DotnetServer.Api.Tests;

public class HelloEndpointTests
{
    [Fact]
    public async Task GetHello_ReturnsGreeting()
    {
        await using var factory = new WebApplicationFactory<Program>();
        using var client = factory.CreateClient();

        using var response = await client.GetAsync("/api/hello");
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);

        var body = await response.Content.ReadFromJsonAsync<HelloResponse>();
        Assert.Equal("Hello from .NET 10", body?.Message);
    }

    [Fact]
    public async Task GetHomeOptionsAndDashboard_ReturnSamplePayloads()
    {
        await using var factory = new WebApplicationFactory<Program>();
        using var client = factory.CreateClient();

        using var optionsResponse = await client.GetAsync("/api/home/options");
        using var dashboardResponse = await client.GetAsync("/api/home");
        Assert.Equal(HttpStatusCode.OK, optionsResponse.StatusCode);
        Assert.Equal(HttpStatusCode.OK, dashboardResponse.StatusCode);

        using var options = JsonDocument.Parse(await optionsResponse.Content.ReadAsStringAsync());
        using var dashboard = JsonDocument.Parse(await dashboardResponse.Content.ReadAsStringAsync());
        Assert.Equal("DEF", options.RootElement.GetProperty("ORG_ID").GetString());
        Assert.Equal("STH001", options.RootElement.GetProperty("FACILITY_ID").GetString());
        Assert.Equal(4, dashboard.RootElement.GetProperty("Segment").GetArrayLength());
    }

    [Theory]
    [InlineData("pfepShortage", "PFEPShortages")]
    [InlineData("pfepRequired", "pfepRequired")]
    [InlineData("moqCeiling", "moqCeilingAlert")]
    [InlineData("erp", "ERPAlert")]
    [InlineData("demandGaps", "pfepDemandGaps")]
    [InlineData("duplicateWorkcenter", "MultipleAssignments")]
    public async Task GetAlertTable_ReturnsSampleRows(string alertType, string expectedCollection)
    {
        await using var factory = new WebApplicationFactory<Program>();
        using var client = factory.CreateClient();

        using var response = await client.GetAsync($"/api/home/alerts/{alertType}");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        using var body = JsonDocument.Parse(await response.Content.ReadAsStringAsync());
        Assert.True(body.RootElement.GetProperty(expectedCollection).GetArrayLength() > 0);
    }

    [Theory]
    [InlineData("WeightDimension", 27)]
    [InlineData("PastDueApprovals", 0)]
    [InlineData("PackagingDetail", 20)]
    public async Task GetMetricTable_ReturnsSampleRows(string metricType, int expectedCount)
    {
        await using var factory = new WebApplicationFactory<Program>();
        using var client = factory.CreateClient();

        using var response = await client.GetAsync($"/api/home/metrics/{metricType}");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        using var body = JsonDocument.Parse(await response.Content.ReadAsStringAsync());
        Assert.Equal(expectedCount, body.RootElement.GetArrayLength());
    }

    [Fact]
    public async Task GetUnknownSampleKey_ReturnsNotFound()
    {
        await using var factory = new WebApplicationFactory<Program>();
        using var client = factory.CreateClient();

        using var alertResponse = await client.GetAsync("/api/home/alerts/unknown");
        using var metricResponse = await client.GetAsync("/api/home/metrics/unknown");

        Assert.Equal(HttpStatusCode.NotFound, alertResponse.StatusCode);
        Assert.Equal(HttpStatusCode.NotFound, metricResponse.StatusCode);
    }

    private sealed record HelloResponse(string Message);
}