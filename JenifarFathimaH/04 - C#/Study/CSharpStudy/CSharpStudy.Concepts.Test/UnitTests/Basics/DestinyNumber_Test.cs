namespace CSharpStudy.Concepts.Test
{
    [TestClass]
    public class DestinyNumberCalculation_Test
    {
        [TestMethod]
        public void Test_CalculateDestinyNumber()
        {
            string strName = "JENIFAR";
            int expectedDestinyNumber = 5;

            int calculatedCompoundNumber = DestinyNumberCalculation.CalculateDestinyNumber(strName);
            int calculatedDestinyNumber = DestinyNumberCalculation.SumDigit(calculatedCompoundNumber);

            Assert.AreEqual(expectedDestinyNumber, calculatedDestinyNumber);
        }
    }
}
