using System;

class Program
{
	static bool Hello(string st)
	{
		string hello = "hello";
		int i = 0;

		foreach(char c in st)
		{
			if(i < hello.Length)
			{
				if(c == hello[i])
				{
					i++;
				}
			}

		}

		return i == hello.Length;
	}

	static void Main()
	{

		string st = Console.ReadLine();


		if(Hello(st))
		{
			Console.WriteLine("YES");
		}
		else
		{
			Console.WriteLine("NO");
		}
	}
}
