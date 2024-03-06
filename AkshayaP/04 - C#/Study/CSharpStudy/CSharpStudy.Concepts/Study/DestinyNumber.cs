using System.Xml.Linq;

namespace CSharpStudy.Concepts;

public class DestinyNumber
{
    public static int FindDestinyNumber(string strName)
    {
        int nDestinyNumber = Calculatedestinynumber(strName);

        return 0;
    }

    public static int Calculatedestinynumber(String name)
    {
        int nDestinyNumber = 0;

        string alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        string values = "12345835112345781234666517";

        name = name.ToUpper();

        for(int i = 0; i < name.Length; i++)
        {
            int nIndex = alphabet.IndexOf(name[i]);

            nDestinyNumber += values[nIndex] - '0'; // '1' - '0' => 49 - 48
        }

        return nDestinyNumber;
    }
}