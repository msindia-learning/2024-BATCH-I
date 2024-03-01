using System;

public class Program
{
    public static void Main(string[] args)
    {
        string word = Console.ReadLine();
        bool tells =Hello(word);
        if (tells)
        {
            Console.WriteLine("YES");
        }
        else
        {
            Console.WriteLine("NO");
        }
    }
    public static bool Hello(string word)
    {
        int hx = word.IndexOf('h');
        int ex = word.IndexOf('e', hx + 1);
        int fLIndex = word.IndexOf('l', ex + 1);
        int sLIndex = word.IndexOf('l',fLIndex + 1);
        int ox = word.IndexOf('o',sLIndex + 1);
        return hx != -1 && ex != -1 && fLIndex != -1 && sLIndex != -1 && ox != -1;
    }
}
