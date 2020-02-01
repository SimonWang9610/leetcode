# -*- coding: utf-8 -*-
"""
Created on Sat Feb  1 00:52:31 2020

@author: Simon
"""

class Solution:
    
    def hammingDistance(self, x, y):
        
        x_bin = bin(x)[2:]
        y_bin = bin(y)[2:]
        
        if len(y_bin) >= len(x_bin):
            x_bin = '0' * abs(len(y_bin) - len(x_bin)) + x_bin
        else:
            y_bin = '0' * abs(len(y_bin) - len(x_bin)) + y_bin
            
        result = [1 for i, j in zip(y_bin, x_bin) if i != j ]
        return sum(result)