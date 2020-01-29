# -*- coding: utf-8 -*-
"""
Created on Tue Jan 28 16:56:11 2020

@author: Simon
"""

class Solution:
    
    def singleString(self, s):
        count_r = 0
        count_l = 0
        
        for item in s:
            if item == 'R':
                count_r += 1
            elif item == 'L':
                count_l += 1
        return (count_r == count_l)
    
    def balancedStringSplit(self, s):
        
        count = 0
        i = 0
        t = ''
        delta = 0
        while i < len(s):

            sub_strs = t + s[i:i + 2]
            i += 2

            if self.singleString(sub_strs):
                count += 1
                t = ''
                delta = 0
            else:
                delta += 2
                t = s[i - delta : i]
            
        return count
    
t = Solution()
a = 'RLLLLRRRLR'
print(t.balancedStringSplit(a))