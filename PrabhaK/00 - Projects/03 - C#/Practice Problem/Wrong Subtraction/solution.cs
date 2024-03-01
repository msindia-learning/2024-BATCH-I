
using System;

class Program
{
	static void Main()
	{

		string[] input = Console.ReadLine().Split();
		int num = int.Parse(input[0]);
		int iterate = int.Parse(input[1]);


		for(int i = 0; i < iterate; i++)
		{
			if(num % 10 == 0)
			{
				num /= 10;
			}
			else
			{

				num -= 1;
			}
		}


		Console.WriteLine(num);
	}
}
