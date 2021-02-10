# -*- coding: utf-8 -*-
"""
Created on Wed Jan 29 14:05:57 2020

@author: Simon
"""

class Solution:
    
    def freqAlphabets(self, s):
        
        new_str = ''
        i = 0
        dic = {key:value for key, value in zip(range(1, 27), range(97, 123))}
        
        
        while i < len(s):
            
            if s[i] != '#':
            
                if (i+2) < len(s) and s[i+2] == '#':
                    
                    new_str += chr(dic[int(s[i]+s[i+1])])
                    i += 3
                
                else:
                    new_str += chr(dic[int(s[i])])
                    i += 1
            else:
                i += 1
                
        return new_str
# identify s[i] is not '#'. otherwise, skip current i
# identify whether s[i+2] is '#', and keep i+2 <len(s)
# mapping

t = Solution()
a ="321#2#"
print(t.freqAlphabets(a))