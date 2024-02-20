namespace CSharpStudy.Concepts.Test;

[TestClass]
public class C01_HelloWorld_Test
{
    [TestMethod]
    public void Test_SayHello()
    {
        string strResult = C01_HelloWorld.SayHello("World");
        
        Assert.AreEqual("Hello, World!", strResult);
    }

    [TestMethod]
    public void Test_SayHello_Check_Pikachu()
    {
        string strResult = C01_HelloWorld.SayHello("Pikachu");

        Assert.AreEqual("Hello, Pikachu!", strResult);
    }
}