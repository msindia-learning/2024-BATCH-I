using System;

class Program
{
    static void Main(string[] args)
    {
        int n = int.Parse(Console.ReadLine());
        string stonetab = Console.ReadLine();


        int count = 0;
        for(int i = 1; i < n; i++)
        {

            if(stonetab[i] == stonetab[i - 1])
                count++;
        }

        Console.WriteLine(count);
    }
}