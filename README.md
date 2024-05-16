# Cafour.MSBuild.JS

Opinionated MSBuild targets for integration with selected JS tools.

## Usage

```xml
<Project>
  <Sdk Name="Microsoft.NET.Sdk" />
  <Sdk Name="Cafour.MSBuild.JS" Version="0.1.1" />

  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
    <JSPackageManager>npm</JSPackageManager>
  </PropertyGroup>

</Project>

```

## Thanks

**Nate McMaster's [Yarn.MSBuild](https://github.com/natemcmaster/Yarn.MSBuild)**

For inspiration on how to set up an SDK NuGet package.

**Lombiq's [NPM-Targets](https://github.com/Lombiq/NPM-Targets)**

Also for inspiration on how to prevent npm from running multiple times using file stamps.
