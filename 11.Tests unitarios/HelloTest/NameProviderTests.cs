using HelloWorldNet;
using FluentAssertions;
namespace HelloTest;

public class NameProviderTests
{
    [Fact]
    public void Given_Name_Provider_When_Name_Requested_Then_Arsys_Should_Be_Returned()
    {
        // Arrange
        var nameProvider = new NameProvider();

        // Act
        var name = nameProvider.GetName();

        // Assert
        var expectedName = "Arsys";
        name.Should().Be(expectedName);
    }
}