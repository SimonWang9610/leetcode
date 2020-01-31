# -*- coding: utf-8 -*-
"""
Created on Wed Jan 29 14:48:54 2020

@author: Simon
"""

class Solution:
    
    def sumZero(self, n):
        
        if n % 2 == 0:
            result = [-i for i in range(1, n/2 + 1)] + \
            [i for i in range(1, n/2 + 1)]
        else:
            result = [-i for i in range(1, (n+1)//2)] + [0] + \
                        [i for i in range(1, (n+1)//2)]
        
        return result
t = Solution()
print(t.sumZero(5))

# duplicated elements
#class Solution:
#    
#    def sumZero(self, n):
#        
#        i = 0
#        new_list = []
#        while i < n:
#            if (n- i) % 3 == 0:
#                new_list.append(((i+1) // 2) * 2)
#                new_list.append((i+1) % 2)
#                new_list.append(-(i+1))
#                i += 3
#            elif (n - i) % 3 == 1:
#                new_list.append(0)
#                i += 1
#            elif (n - i) % 3 == 2:
#                new_list.append(i // 3)
#                new_list.append(-(i // 3))
#                i += 2
#                
#        return new_list
#
#t = Solution()
#print(t.sumZero(11))

