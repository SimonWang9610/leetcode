# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

class Solution:
    
    def judgeCircle(self, move):
        
        x_value = 0
        y_value = 0
        
        for item in move:
            if item == 'R':
                x_value -= 1
            elif item == 'L':
                x_value += 1
            elif item == 'U':
                y_value += 1
            elif item == 'D':
                y_value -= 1
        if x_value == 0 and y_value == 0:
            return True
        else:
            return False