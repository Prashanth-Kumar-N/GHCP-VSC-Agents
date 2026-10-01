using DotnetServer.Api;

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.MapGet("/api/hello", () => Results.Ok(new { message = "Hello from .NET 10" }));
app.MapHomeEndpoints();

app.Run();

public partial class Program;
