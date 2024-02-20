namespace CSharpStudy.Concepts.Test;

[TestClass]
public class C01_HelloWorld_Test
{
    [TestMethod]
    public void Test_SayHello()
    {
        string strResult = C01_HelloWorld.SayHello();

        Assert.AreEqual("Hello, World!", strResult);
    }
}