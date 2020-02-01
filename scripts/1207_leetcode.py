# -*- coding: utf-8 -*-
"""
Created on Sat Feb  1 00:09:31 2020

@author: Simon
"""

class Solution:
    
    def uniqueOccurrences(self, arr):
        
        new_set = set(arr)
        counts = []
        while len(new_set):
            temp = new_set.pop()
            count = 0
            for item in arr:
                if item == temp:
                    count += 1
            counts.append(count)
        
        if len(counts) == len(set(counts)):
            return True
        else:
            return False  