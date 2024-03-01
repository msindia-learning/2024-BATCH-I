using System;

string n = Console.ReadLine();
string strmystring = Console.ReadLine();

int nCount = 0;

for(int i = 0; i < strmystring.Length - 1; i++)
{
    if(strmystring[i] == strmystring[i + 1])
    {
        nCount++;
    }
}