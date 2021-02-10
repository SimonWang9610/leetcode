# -*- coding: utf-8 -*-
"""
Created on Mon Jan 27 15:12:04 2020

@author: Grad-cb4101
"""

class Solution:
    
    def check(self, nums):
        
        flag = True
        
        for num in nums:
            if not 1<= num <= 10**5:
                flag = False
                return flag
        if not 1 <= len(nums) <= 500:
            flag = False
            return flag
        
        return flag
            
        
    
    def cal_even_number(self, nums):
        
        if self.check(nums):
            count = 0
            for num in nums:
                if len(str(num)) % 2 == 0:
                    count += 1
            return count
        else:
            raise ValueError('Invalid input!')


                
            
            
            
        