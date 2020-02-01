# -*- coding: utf-8 -*-
"""
Created on Fri Jan 31 10:56:35 2020

@author: dengpanwang
"""

roman_symbol = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
        
dec_value = [1, 5, 10, 50, 100, 500, 1000]
dic = {key:value for key, value in zip(roman_symbol, dec_value)}
        
class Solution:
    
    def romanToInt(self, s):
        
        i = 0
        result = 0 
        
        while i < len(s):
            if i != len(s) -1:
                if dic.get(s[i]) < dic.get(s[i+1]):
                    result += dic.get(s[i])
                else:
                    result -= dic.get(s[i])
                i += 1
            else:
                result += dic.get(s[i])
                break                    
        return result
