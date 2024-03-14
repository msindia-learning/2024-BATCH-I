using System;

public class Numerology
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Enter your Name: ");
        string demo = Console.ReadLine();
        int task = Calculatedn(demo);
        Console.WriteLine(task);
    }

    public static int Calculatedn(string demo)
    {
        string chart = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        string number = "12345835112345781234666517";
        demo = demo.ToUpper();
        int dn = 0;
        for(int i = 0; i < demo.Length; i++)
        {
            for(int j = 0; j < chart.Length; j++)
            {
                if(demo[i] == chart[j])
                {
                    dn += int.Parse(number[j].ToString());

                }
                else
                {
                    break;
                }
            }
        }
        return dn;
    }
}
