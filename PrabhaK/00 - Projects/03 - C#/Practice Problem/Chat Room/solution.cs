using System;

class Program
{
	static bool sayhello(string st)
	{
		string strhello = "hello";
		int count = 0;

		for(int i = 0; i < strhello.Length; i++)
		{
			if(st[i] == strhello[i])
			{
				count++;
			}
		}
		return count == strhello.Length;
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