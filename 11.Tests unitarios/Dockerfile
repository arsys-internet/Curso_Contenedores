FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /code
COPY HelloWorldNet/HelloWorldNet.csproj .
RUN dotnet restore
COPY HelloWorldNet/ ./
RUN dotnet build 

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS test
WORKDIR /code/HelloTest 
COPY HelloTest/ ./
WORKDIR /code/HelloWorldNet
COPY --from=build /code .
WORKDIR /code/HelloTest
RUN dotnet test

FROM mcr.microsoft.com/dotnet/runtime:8.0
WORKDIR /app
COPY --from=build /code/bin/Debug/net8.0/ .
CMD ["/app/HelloWorldNet"]