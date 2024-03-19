namespace CSharpStudy.Concepts.Study
{
    public class FinalDestinyNumber
    {
        public static int FindFinalDestinyNumber(string strName)
        {
            string chart = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            string number = "12345835112345781234666517";

            strName = strName.ToUpper();

            int dn = 0;

            for(int i = 0; i < strName.Length; i++)
            {
                for(int j = 0; j < chart.Length; j++)
                {
                    if(strName[i] == chart[j])
                    {
                        dn += int.Parse(number[j].ToString());
                        break;
                    }
                }
            }  
                return dn;
            
        }
    }
}
