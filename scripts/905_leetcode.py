# -*- coding: utf-8 -*-
"""
Created on Thu Jan 30 17:20:31 2020

@author: Grad-cb4101
"""
class Solution:
    
    def sortArrayByParity(self, A):
        
        even_list = [item for item in A if item % 2 == 0]
        odd_list = [item for item in A if item % 2 != 0]
        
        new_list =  even_list + odd_list
        return new_list
  
# slower solution    
#class Solution:
#    
#    def sortArrayByParity(self, A):
#        
#        even_list = []
#        odd_list = []
#        
#        for item in A:
#            if item % 2 == 0:
#                even_list.append(item)
#            else:
#                odd_list.append(item)
#        
#        return (even_list + odd_list)
