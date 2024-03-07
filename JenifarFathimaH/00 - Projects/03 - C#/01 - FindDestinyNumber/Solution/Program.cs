using System;

public class Program
{
    public static void Main(string[] args)
    {
        string Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        Console.WriteLine("Enter Name:");
        string Name = Console.ReadLine().ToUpper();
        int[] numValue = NumValue(Alphabet, Name);
        int[] FinalArr = MatchIndex(numValue);
        int sum = 0;
        foreach (int value in FinalArr)
        {
            sum += value;
        }
        Console.WriteLine("Compound Number: " + sum);
        int destinynumber = SumDigits(sum);
        Console.WriteLine("Destiny number: " + destinynumber);
    }
    public static int[] NumValue(string Alphabet, string Name)
    {
        int[] result = new int[Name.Length];
        for (int i = 0; i < Name.Length; i++)
        {
            for (int j = 0; j < Alphabet.Length; j++)
            {
                if (Name[i] == Alphabet[j])
                {
                    result[i] = j;
                    break;
                }
            }
        }
        return result;
    }

    public static int[] MatchIndex(int[] numValue)
    {
        int[] IndexValue = { 1, 2, 3, 4, 5, 8, 3, 5, 1, 1, 2, 3, 4, 5, 7, 8, 2, 2, 3, 4, 6, 6, 6, 5, 1, 7 };
        int[] finalIndex = new int[numValue.Length];
        for (int i = 0; i < numValue.Length; i++)
        {
            int index = numValue[i];
            finalIndex[i] = IndexValue[index];
        }
        return finalIndex;
    }

    public static int SumDigits(int result)
    {
        int sum = 0;
        while (result > 0)
        {
            sum += result % 10;
            result /= 10;
        }
        if (sum >= 10)
        {
            sum = SumDigits(sum);
        }
        return sum;
    }
}
