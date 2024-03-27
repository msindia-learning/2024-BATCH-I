using systems;

class Hulk
{
    static void main(string args[])
    {
        Console.WriteLine("Enter the Number of Layers:");
        int n = Convert.ToInt32(Console.ReadLine());

        string hulkFeeling = "I hate it";
        for(int = 0; i <= n; int++)
        {
            if(i % 2 == 0)
            {
                hulkFeeling += "that I love ";

            }
            else
            {
                hulkFeeling += "that I hate ";
            }
        }
        hulkFeeling += "it";
        Console.WriteLine(feeling);
    }
}