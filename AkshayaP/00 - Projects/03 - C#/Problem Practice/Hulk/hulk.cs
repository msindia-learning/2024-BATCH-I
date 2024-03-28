using Systems;

class Hulk
{
    static void main (string[]args)
    {
        Console.WriteLine("Enter the Number of Layers:");
        int nValue = Convert.ToInt32(Console.ReadLine());

        string strhulkFeeling = "I hate ";
        for(i = 2; i <= nValue; i++)
        {
            if(i % 2==0)
            {
                string strhulkFeeling += "that I love ";

            }
            else
            {
                string strhulkFeeling += "that I hate ";
            }
        }
        strhulkFeeling += "it";
        Console.WriteLine(strhulkFeeling);
    }
}