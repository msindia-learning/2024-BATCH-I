using System;

class Program
{
    static void Main(string[] args)
    {

        Console.WriteLine("Enter your name:");
        string name = Console.ReadLine();


        int destinyNumber = CalculateDestinyNumber(name);



        Console.WriteLine("DestinyNumber: " + destinyNumber);
    }

    static int CalculateDestinyNumber(string name)
    {

        int[] values = {
            // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
               1,2,3,4,5,8,3,5,1,1,2,3,4,5,7,8,1,2,3,4,6,6,6,5,1,7
        };

        int sum = 0;


        for(int i = 0; i < name.Length; i++)
        {
            char currentCharacter = name[i];


            if(Char.IsLetter(currentCharacter))
            {

                currentCharacter = Char.ToUpper(currentCharacter);


                int index = currentCharacter - 'A';


                sum += values[index];
            }
        }


        while(sum > 9)
        {
            int Sum = 0;


            while(sum > 0)
            {
                Sum += sum % 10;
                sum /= 10;
            }

            sum = Sum;
        }

        return sum;
    }
}