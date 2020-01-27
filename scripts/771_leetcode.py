# -*- coding: utf-8 -*-
"""
Created on Mon Jan 27 16:09:11 2020

@author: Grad-cb4101
"""

class Solution:
    
    def check_distinct(self, chars):
        
        i = len(chars)
        chars_set = set(chars)
        
        if len(chars_set) == i and i <= 50:
            return True
        else:
            return False
        
    
    def numJewelsInStones(self, J, S):
        
        if len(S) <= 50 and self.check_distinct(J):
            
            count = 0
            for j in J:
                for s in S:
                    if j == s:
                        count += 1
            return count
                