# -*- coding: utf-8 -*-
"""
Created on Tue Jan 28 21:18:53 2020

@author: Simon
"""

class Solution:
    
    def toLowerCase(self, s):
        new_str = ''
        for item in s:
            if 65 <= ord(item) <= 90:
                new_str += chr(ord(item) + 32)
            else:
                new_str += item
        return new_str
                
        