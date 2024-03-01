using System;

class Program
{
	static bool sayhello(string st)
	{
		string strhello = "hello";
		int i = 0;

		foreach(char c in st)
		{
			if(i < strhello.Length)
			{
				if(c == strhello[i])
				{
					i++;
				}
			}

		}

		return i == strhello.Length;
	}

	static void Main()
	{

		string st = Console.ReadLine();


		if(sayhello(st))
		{
			Console.WriteLine("YES");
		}
		else
		{
			Console.WriteLine("NO");
		}
	}
}