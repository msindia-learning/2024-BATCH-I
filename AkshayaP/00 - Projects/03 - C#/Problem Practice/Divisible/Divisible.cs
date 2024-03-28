using System;

class Divisible
{
	static int MovesToDivisible(int a,int b)
	{
		if(a % b == 0)
			return 0;
		else
			return b - (a%b);

		//int remainder=a%b;
		//if(remainder==0)
		//   return 0;
		//else
		//   return b-remainder;


	}
	static void Main(string[] args)
	{
		int t = int.Parse(Console.ReadLine());
		for(int i=0;i<t;i++)
		{
			string[] input=Console.ReadLine().Split();
			int a = int.Parse(input[0]);
			int b = int.Parse(input[1]);


			Console.WriteLine(MovesToDivisible(a,b));
		}
	}
}