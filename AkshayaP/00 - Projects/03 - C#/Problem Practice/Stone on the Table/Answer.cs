int nValue = Console.ReadLine();
string strMyString = Console.ReadLine();

int nCount = 0;

for(int i = 0; i < nValue-1; i++)
{
    if(strMyString[i] == strMyString[i + 1])
    {
        nCount++;
    }
}
Console.WriteLine(nCount);