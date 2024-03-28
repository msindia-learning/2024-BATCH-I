using System;

class GravityColumn
{
    static void Main(string[] args)
    {
        int n = int.Parse(Console.ReadLine());
        int[] columns = Array.ConvertAll(Console.ReadLine().Split(), int.Parse);
        GravityInsertionSort(columns);
        Console.WriteLine(string.Join(" ", columns));
    }

    static void GravityInsertionSort(int[] arr)
    {
        int n = arr.Length;
        for (int i = 1; i < n; ++i)
        {
            int key = arr[i];
            int j = i - 1;

            while (j >= 0 && arr[j] > key)
            {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }
}