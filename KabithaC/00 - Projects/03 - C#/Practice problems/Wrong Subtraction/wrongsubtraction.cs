using System;

namespace Codechef
{
    class Program
    {
        public static void Main(String[] args)
        {
            string[] strInput = Console.ReadLine()!.Split(" ");

            int num = int.Parse(strInput[0]);
            int k = int.Parse(strInput[1]);

            while(k > 0)
            {
                if(num % 10 == 0)
                {
                    num = num / 10;
                }
                else
                {
                    num = num - 1;
                }
                k--;
            }
            Console.WriteLine(num);
        }
    }
}
