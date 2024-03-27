namespace CSharpStudy.Concepts
{
    public class Hulk
    {
        public static void Execute()
        {
            // TODO: Get Input From User
            // int nNumber = Convert.ToInt32(Console.ReadLine());

            int nNumber = 10;

            int nValue = nNumber / 2;
            int nRemainder = nNumber % 2;
            string strResult = string.Empty;

            switch(nRemainder)
            {
                case 0:
                    strResult = GetConstantValue(nValue - 1);

                    strResult += "I hate that I love it";

                    break;
                case 1:
                    strResult = GetConstantValue(nValue);

                    strResult += "I hate it";

                    break;
            }

            Console.WriteLine(strResult);
        }

        private static string GetConstantValue(int nUpperLimit)
        {
            string strValue = string.Empty;

            for(int i = 0; i < nUpperLimit; i++)
            {
                strValue += "I hate that I love that ";
            }

            return strValue;
        }

        public static void Jenifar_Code(int nNumber)
        {
            string[] strMessage = { "I hate", "I love" };

            string final = "";

            if (nNumber == 1)
            {
                final = "I hate it";
            }
            else if (nNumber > 1)
            {
                for (int i = 0; i < nNumber - 1; i++)
                {
                    final += $"{strMessage[i % 2]} that ";
                }
                final += strMessage[(nNumber - 1) % 2] + " it";
            }

            Console.WriteLine(final);
        }
    }
}