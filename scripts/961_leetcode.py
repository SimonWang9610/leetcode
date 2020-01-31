# -*- coding: utf-8 -*-
"""
Created on Thu Jan 30 17:29:14 2020

@author: Grad-cb4101
"""

#class Solution:
#    
#    def repeatedNTimes(self, A):
#        
#        while len(A):
#            t = A.pop()
#            
#            for item in A:
#                if item == t:
#                    return t

class Solution:
        
    def repeatedNTimes(self, L):
        
        if len(L) - len(set(L)) == 1:
            new_set = set()
            for item in L:
                if item not in new_set:
                    new_set.add(item)
                else:
                    return item
        else:
            sub_a = L[:len(L)//2]
            sub_b = L[len(L)//2:]
            
            if len(set(sub_a)) != len(sub_a):
                return self.repeatedNTimes(sub_a)
            else:
                return self.repeatedNTimes(sub_b)
