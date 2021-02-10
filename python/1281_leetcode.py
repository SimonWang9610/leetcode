# -*- coding: utf-8 -*-
"""
Created on Mon Jan 27 15:53:00 2020

@author: Grad-cb4101
"""

class Solution:
    
    def subtractProductAndSum(self, num):
        
        if isinstance(num, int) and 1<= num <= 10**5:
            str_nums = str(num)
            product_digits = 1
            sum_digits = 0
            
            for str_num in str_nums:
                product_digits *= int(str_num)
                sum_digits += int(str_num)
                
            return (product_digits - sum_digits)

                
                
            
            
            