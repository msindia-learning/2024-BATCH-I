using System;
using System.Diagnostics.CodeAnalysis;

public class DestinyNumberFinder
{
	public static int FinddestinyNumber(string userName)
	{
		int compoundValue = 0;
		char[] letters = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' };
		int[] letterValues = { 1, 2, 3, 4, 5, 8, 3, 5, 1, 1, 2, 3, 4, 5, 7, 8, 1, 2, 3, 4, 6, 6, 6, 5, 1, 7 };

		for(int i = 0; i < userName.Length; i++)
		{

			for(int j = 0; j < letters.Length;j++)
			{

				if(userName[i] == letters[j])
				{
					compoundValue = compoundValue + letterValues[j];
				}
				
			}
		}

		while(compoundValue != 0 && compoundValue > 9)
		{
			int Sum = 0;
			int digit1 = compoundValue / 10;
			int digit2 = compoundValue % 10;

			Sum = digit1 + digit2;
			compoundValue = Sum;

		}

		return compoundValue;
	}

	public static void Main(string[] args)
	{
		Console.WriteLine("Enter Your name");
		string userName = Console.ReadLine();
		int destinyValue = FinddestinyNumber(userName);
		Console.WriteLine(destinyValue);
	}
}