
namespace CSharpStudy.Concepts.Basics
{
    public class DestinyNumberCalculation
    {
        public static int CalculateDestinyNumber(string strName)
        {
            string strAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            int[] lstAlphaValue = { 1, 2, 3, 4, 5, 8, 3, 5, 1, 1, 2, 3, 4, 5, 7, 8, 2, 2, 3, 4, 6, 6, 6, 5, 1, 7 };
            int[] lstresultValue = new int[strName.Length];
            int nNumber = 0;
            for (int i = 0; i < strName.Length; i++)
            {
                for (int j = 0; j < strAlphabet.Length; j++)
                {
                    if (strName[i] == strAlphabet[j])
                    {
                        lstresultValue[i] = lstAlphaValue[j];
                    }
                }
                nNumber += lstresultValue[i];
            }

            return SumDigit(nNumber);
        }

        public static int SumDigit(int nNumber)
        {
            while (nNumber > 9)
            {
                int nSum = 0;
                while (nNumber != 0)
                {
                    nSum += nNumber % 10;
                    nNumber /= 10;
                }
                nNumber = nSum;
            }
            return nNumber;
        }
    }
}
