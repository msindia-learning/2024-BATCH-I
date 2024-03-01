using System;

public class Program
{
    public static void Main(string[] args)
    {
        string[] lstInput = Console.ReadLine().Split();
        int nNum= int.Parse(lstInput[0]);
        int nIter= int.Parse(lstInput[1]);
        for (int i = 0; i < nIter; i++)
        {
            if (nNum % 10 != 0)
            { nNum -= 1;}
            else
            { nNum /= 10;}
        }Console.WriteLine(nNum);
    }
}
