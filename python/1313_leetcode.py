# -*- coding: utf-8 -*-
"""
Created on Mon Jan 27 11:03:15 2020

@author: Grad-cb4101
"""

# for-loops (68ms) are faster than range() (88ms) in the check()
# but they occupy the same memory

class Solution:

    def check(self, nums):
        result = True
        
        if not len(nums) in range(2, 101, 2):
            result = False
            return result
                    
        for num in nums:
                    
            if not num in range(0, 101):
                result = False
                return result
        return result            
        
    def decompressed(self, nums):
        if self.check(nums):
                
            generated_list = []
            i = 0 
            
            while i < len(nums):
                
                for _ in range(nums[i]):
                    generated_list.append(nums[i+1])
                    
                i += 2
                
            return generated_list
        else:
            raise ValueError('input list is not formal!')

a = [i for i in range(1, 5)]
            
new = Solution()
print(new.decompressed(a))

'''
def check(nums):
    result = True
    
    if not 2 <= len(nums) <= 100:
        result = False
        return result
                
    if not len(nums) % 2 == 0:
        result = False
        return result
                
    for num in nums:
                
        if not isinstance(num, int):
            result = False
            return result
                    
        if not (1 <= num <= 100):
            result = False
            return result
    return result

def decompressed(nums):
    if check(nums):
        generated_list = []
        i = 0
            
        while i < len(nums):
                
            for _ in range(nums[i]):
                generated_list.append(nums[i+1])
                    
            i += 2
                
        return generated_list  

a = [i for i in range(1, 5)]

print(decompressed(a))
'''                  
            
                    
                    

        