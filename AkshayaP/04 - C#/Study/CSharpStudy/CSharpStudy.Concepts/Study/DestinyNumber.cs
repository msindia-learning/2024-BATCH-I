namespace CSharpStudy.Concepts.Basics;

public class DestinyNumber
{
    public static int CalculateDestinyNumber(string nName)
    {
        int[] nValues = {
            // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
               1,2,3,4,5,8,3,5,1,1,2,3,4,5,7,8,1,2,3,4,6,6,6,5,1,7
        };


        int nSum = 0;

        nName = nName.ToUpper();

        for(int i = 0; i < nName.Length; i++)
        {
            char currentCharacter = nName[i];
            int nIndex = currentCharacter - 'A';

            nSum += nValues[Index];
        }




        if(nSum % 9 == 0)
        {
            return 9;
        }

        return nSum % 9;
    }
}

