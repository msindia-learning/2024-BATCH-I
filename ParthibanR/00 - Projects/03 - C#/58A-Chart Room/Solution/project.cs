using System;

class Project
{
    static void Main(string[] args)
    {
      int n = int.Parse(Console.ReadLine());
      string s = Console.ReadLine();
      int count = 0;
        for (int i = 1; i < n; i++)
        {
            if (s[i] == s[i - 1])
            count++;
        }
        Console.WriteLine(count);
    }
}