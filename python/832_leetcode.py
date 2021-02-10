# -*- coding: utf-8 -*-
"""
Created on Wed Jan 29 18:08:54 2020

@author: Simon
"""

class Solution:
    
    def flipAndInvertImage(self, A):
        B = []
        for arr in A:
            arr = arr[::-1]
            arr = [(x ^ 1) for x in arr]
            B.append(arr)
        return B
# can not change the values of A
# even though the value of arr has been altered
# must store the altered values in a new nested list
t = Solution()
a = [[1,1,0],[1,0,1],[0,0,0]]
print(t.flipAndInvertImage(a))