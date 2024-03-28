using System;

class Hulk
{
    static void main(string args[])
    {
        Console.WriteLine("Enter the Number of Layers:");
        int n = Convert.ToInt32(Console.ReadLine());

        string hulkFeeling = "I hate";
        for(int i = 0; i <= n; i++)
        {
            if(i % 2 == 0)
            {
                hulkFeeling += "that I love ";

            }
            else
            {
                hulkFeeling += "that I hate ";
            }
        }
        hulkFeeling += "it";
        Console.WriteLine(hulkFeeling);
    }
}