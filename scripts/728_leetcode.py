# -*- coding: utf-8 -*-
"""
Created on Fri Jan 31 09:21:11 2020

@author: dengpanwang
"""

class Solution:
    
    def getDigit(self, num):
        ll = []
        for item in str(num):
            ll.append(int(item))
        if 0 in ll:
            return False
        else:
            return ll
    
    def selfDividingNumbers(self, left, right):
        
        self_num = []
        num = left
        while num <= right:
            
            digits = self.getDigit(num)
            result = []
            
            if isinstance(digits, list):                
                result = [(num % digit) for digit in digits]
               
            if len(result) != 0 and sum(result) == 0:
                self_num.append(num)
                      
            num += 1
        
        return self_num

# -*- coding: utf-8 -*-
"""
Created on Fri Jan 31 10:38:02 2020

@author: dengpanwang
"""

#class Solution:
#    
#    def getDigit(self, num):
#        ll = []
#        for item in str(num):
#            ll.append(int(item))
#        return ll
#    
#    def selfDividingNumbers(self, left, right):
#        
#        self_num = []
#        num = left
#        while num <= right:
#            digits = self.getDigit(num)
#            if 0 in digits:
#                num += 1
#                continue
#            result = [(num % digit) for digit in digits]
#            if sum(result) == 0:
#                self_num.append(num)
#            num += 1
#        return self_num


#class Solution:
#    
#    def selfDividingNumbers(self, left, right):
#        
#        self_num = []
#        num = left
#        while num <= right:
#            
#            if '0' not in str(num):
#                digits = [int(item) for item in str(num)]
#            else:
#                digits = None
#                
#            result = []
#            
#            if isinstance(digits, list):                
#                result = [(num % digit) for digit in digits]
#               
#            if len(result) != 0 and sum(result) == 0:
#                self_num.append(num)
#                      
#            num += 1
#        
#        return self_num

#class Solution:
#    
#    def selfDividingNumbers(self, left, right):
#        
#        self_num = []
#        num = left
#        while num <= right:
#            digits = list(map(int, str(num)))
#           
#            if 0 in digits:
#                digits = None
#                
#            result = []
#            
#            if digits is not None:                
#                result = [(num % digit) for digit in digits]
#               
#            if len(result) != 0 and sum(result) == 0:
#                self_num.append(num)
#                      
#            num += 1
#        
#        return self_num