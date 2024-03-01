using System;
 
public class Program
{
    public static void Main(string[] args)
    {
        int n = int.Parse(Console.ReadLine());
        string strColors = Console.ReadLine();
        int count = 0;
        for (int i = 1; i < n; i++)
        {
            if (strColors[i] == strColors[i - 1])
            {
                count++;
            }
        }
        Console.WriteLine(count);
    }
}