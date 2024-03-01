using System;

class Program
{
	static void Main()
	{
		int n = int.Parse(Console.ReadLine());
		string colors = Console.ReadLine();
		int Stones = 0;
		for(int i = 1; i < n; i++)
		{
			if(colors[i] == colors[i - 1])
			{
				Stones++;
			}
		}

		Console.WriteLine(Stones);
	}
}
