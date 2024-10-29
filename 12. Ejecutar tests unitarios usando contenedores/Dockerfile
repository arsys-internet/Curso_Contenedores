FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /code
COPY HelloWorldNet.csproj .
RUN dotnet restore
COPY . .
RUN dotnet build

FROM mcr.microsoft.com/dotnet/runtime:8.0
WORKDIR /app
COPY --from=build /code/bin/Debug/net8.0/ .
CMD ["/app/HelloWorldNet"]