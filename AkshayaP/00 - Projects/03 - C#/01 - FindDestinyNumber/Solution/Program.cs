using System;
using System.Diagnostics.CodeAnalysis;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter your name:");
        string name = Console.ReadLine();
        int destinyNumber = Calculatedestinynumber(name);
        Console.WriteLine($"your neumerology destiny number: {destinyNumber}");
    }

    static int Calculatedestinynumber(String name)
    {
        int destinyNumber = 0;

        string alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        string values = "12345835112345781234666517";

        name = name.ToUpper();

        for(int i = 0; i < name.Length; i++)
        {
            int nIndex = alphabet.IndexOf(name[i]);

            destinyNumber += values[nIndex] - '0'; // '1' - '0' => 49 - 48
        }

        return destinyNumber;
    }
}