using System;
 
public class Program
{
    public static void Main(string[] args)
    {
        int nRange = int.Parse(Console.ReadLine());
        string strColors = Console.ReadLine();
        int nCount = 0;
        for (int i = 1; i < nRange; i++)
        {
            if (strColors[i] == strColors[i - 1])
            {
                nCount++;
            }
        }
        Console.WriteLine(nCount);
    }
}