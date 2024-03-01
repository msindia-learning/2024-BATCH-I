using System;

string n = Console.ReadLine();
string mystring = Console.ReadLine();

int count = 0;

for(int i = 0; i < mystring.Length - 1; i++)
{
    if(mystring[i] == mystring[i + 1])
    {
        count++;
    }
}