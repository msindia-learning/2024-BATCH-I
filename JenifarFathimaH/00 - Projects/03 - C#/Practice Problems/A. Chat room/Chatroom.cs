using System;

public class Program
{
    public static void Main(string[] args)
    {
        string strWord = Console.ReadLine();
        bool bCanSayHello = bHello(strWord);
        if (bCanSayHello)
        {
            Console.WriteLine("YES");
        }
        else
        {
            Console.WriteLine("NO");
        }
    }

    public static bool bHello(string strWord)
    {
        int nHIndex = IndexOfCustom(strWord, 'h', 0);
        int nEIndex = IndexOfCustom(strWord, 'e', nHIndex + 1);
        int nFLIndex = IndexOfCustom(strWord, 'l', nEIndex + 1);
        int nSLIndex = IndexOfCustom(strWord, 'l', nFLIndex + 1);
        int nOIndex = IndexOfCustom(strWord, 'o', nSLIndex + 1);

        return nHIndex != -1 && nEIndex != -1 && nFLIndex != -1 && nSLIndex != -1 && nOIndex != -1;
    }

    public static int IndexOfCustom(string str, char cTarget, int nStartIndex)
    {
        for (int i = nStartIndex; i < str.Length; i++)
        {
            if (str[i] == cTarget)
            {
                return i;
            }
        }
        return -1;
    }
}
