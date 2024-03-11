using System;

public class DestinyNumberFinder
{
	public static int FindDestinyNumber(string userName)
	{
		int compoundValue = 0;
		char[] letters = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' };
		int[] letterValues = { 1, 2, 3, 4, 5, 8, 3, 5, 1, 1, 2, 3, 4, 5, 7, 8, 1, 2, 3, 4, 6, 6, 6, 5, 1, 7 };

		for(int i = 0; i < userName.Length; i++)
		{
			for(int j = 0; j < letters.Length; j++)
			{
				if(Char.ToUpper(userName[i]) == letters[j])
				{
					compoundValue += letterValues[j];
					break;
				}
			}
		}

		while(compoundValue > 9)
		{
			int sum = 0;
			while(compoundValue > 0)
			{
				sum += compoundValue % 10;
				compoundValue /= 10;
			}
			compoundValue = sum;
		}

		return compoundValue;
	}

	public static void Main(string[] args)
	{
		Console.WriteLine("Enter Your name");
		string userName = Console.ReadLine();
		int destinyValue = FindDestinyNumber(userName);
		Console.WriteLine("Your Destiny Number is: " + destinyValue);
	}
}