namespace CSharpStudy.Concepts.Test;

[TestClass]
public class C02_demo_Test
{
    [TestMethod]
    public void Test_demo()
    {
        int fullName = C02_demo.Demo(1, 1);

        Assert.AreEqual(2, fullName);
    }

    
}