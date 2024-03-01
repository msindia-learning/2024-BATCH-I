using System;

public class Program
{
    public static void Main(string[] args)
    {
        string[] lstInput = Console.ReadLine().Split();
        int nNumber = int.Parse(lstInput[0]);
        int nIteration = int.Parse(lstInput[1]);
        for (int i = 0; i < nIter; i++)
        {
            if (nNumber % 10 != 0)
            { nNumber -= 1;}
            else
            { nNumber /= 10;}
        }Console.WriteLine(nNumber);
    }
}
