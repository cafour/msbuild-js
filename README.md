# Cafour.MSBuild.JS

Opinionated MSBuild targets for integration with selected JS tools.

## Usage

```xml
<Project>
  <Sdk Name="Microsoft.NET.Sdk" />
  <Sdk Name="Cafour.MSBuild.JS" Version="0.2.0" />

  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
    <JSPackageManager>npm</JSPackageManager>
  </PropertyGroup>

</Project>

```

## EmbeddedResources

By default, this target doesn't add any new items to the build process. It's up to the user to either know in advance where the new files will be located or to add them after the `JSBuild` target has run its course.

If you know in advance what files you want to embed:

```xml
<Project>
  <Sdk Name="Microsoft.NET.Sdk" />
  <Sdk Name="Cafour.MSBuild.JS" Version="0.2.0" />

  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
    <JSPackageManager>npm</JSPackageManager>
  </PropertyGroup>

  <ItemGroup>
    <EmbeddedResource Include="obj\client\Scripts\script.js" />
    <EmbeddedResource Include="obj\client\Styles\style.css" />
  </ItemGroup>

</Project>
```

If you don't know the exact file names in advance:

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

  <Target Name="EmbedJSBuildResults" BeforeTargets="$(JSBuildBeforeTargets)" DependsOnTargets="JSBuild">
    <ItemGroup>
      <EmbeddedResource Include="obj\client\**\*.js" />
      <EmbeddedResource Include="obj\client\**\*.css" />
    </ItemGroup>
  </Target>

</Project>
```

## Thanks

**Nate McMaster's [Yarn.MSBuild](https://github.com/natemcmaster/Yarn.MSBuild)**

For inspiration on how to set up an SDK NuGet package.

**Lombiq's [NPM-Targets](https://github.com/Lombiq/NPM-Targets)**

Also for inspiration on how to prevent npm from running multiple times using file stamps.
