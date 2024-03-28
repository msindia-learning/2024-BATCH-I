using System;
class Gravity
{
    static void Main(string[] args)
    {
        int nValue = int.Parse(Console.ReadLine());
        int[] columns = Array.ConvertAll(Console.ReadLine().Split(), int.Parse);

        for(int i = 0; i < nValue - 1; i++)
        {
            for(int j = 0; j < nValue - i - 1; j++)
            {
                if(columns[j] > columns[j+1])
                {   
                    int valueFromcolumn= columns[j];
                    columns[j] = columns[j + 1];
                    columns[j + 1] = valueFromcolumn;
                }
            }
        }
        for(int i=0;i< nValue; i++)
        {
            Console.Write(columns[i]+ " ");
        }
    }
}