using System;
class Program
{
	static void Main()
	{

		string[] lstinput = Console.ReadLine().Split();
		int num = int.Parse(lstinput[0]);
		int iterate = int.Parse(lstinput[1]);


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