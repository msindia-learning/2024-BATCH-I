using System;
using System.Collections.Concurrent;
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
        int sum = 0;

        for(int i = 0; i < name.Length; i++)
        {
            char currentChar = name[i];
            if(Char isLetter(currentcharacter))
                    {
            currentCharacter = char.ToUpper(currentCharacter);

            int index = currentcharacter.character - 'A';
            sum += Values[index];
        }
        }

        return sum ;
    }
}