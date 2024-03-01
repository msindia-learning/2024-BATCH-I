using System;

public class Program
{
    public static void Main(string[] args)
    {
        string[] input = Console.ReadLine().Split();
        int n= int.Parse(input[0]);
        int k= int.Parse(input[1]);
        for (int i = 0; i < k; i++)
        {
            if (n % 10 != 0)
            {n -= 1;}
            else
            {n /= 10;}
        }Console.WriteLine(n);
    }
}
