
            string[] lstArr = Console.ReadLine().Split(' ');
            int n = int.Parse(lstArr[0]);
            int k = int.Parse(lstArr[1]);
            for(int i = 0; i < k; i++)
            {
                if(n % 10 == 0)
                {
                    n = n / 10;
                }
                else
                {
                    n = n - 1;
                }

            }
            Console.WriteLine(n);