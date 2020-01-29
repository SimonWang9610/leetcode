# -*- coding: utf-8 -*-
"""
Created on Tue Jan 28 21:25:43 2020

@author: Simon
"""

class Solution:
    
    def oddCells(self, n, m, indices):
        
        count = 0
        count_r = [0 for i in range(n)]
        count_c = [0 for i in range(m)]
        
        for item in indices:
            # not need to compare the value of item[i]
            # only need to know which row and col they add
            count_r[item[0]] += 1
            count_c[item[1]] += 1

        print(count_r)
        print(count_c)
        for r in count_r:
            for c in count_c:
                if (r + c) % 2 != 0:
                    count += 1
        
        return count
        
t = Solution()

a =[[0,1],[1,1]]

print(t.oddCells(2, 3, a))
        