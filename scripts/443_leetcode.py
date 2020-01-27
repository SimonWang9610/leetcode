# -*- coding: utf-8 -*-
"""
Created on Mon Jan 27 12:14:39 2020

@author: Grad-cb4101
"""
'''
def check(str_lists):
    
    # make sure every entry length is 1
    for char in str_lists:
        if len(char) == 1 and 35 <= ord(char) <= 126:
            return True
        else:
            return False
        
def compress(str_lists):
    
    if check(str_lists):
        
        new_list = []
        str_sets = set(str_lists)
        count = 0
        
        for key in str_sets:
            for item in str_lists:
                if item == key:
                    count += 1                      
            new_list.append(str(count))
            new_list.append(key)
        
        new_list.reverse()
        return new_list
    
    else:
        raise ValueError('input list is not formal!')
                
        
a = ['a']
print(compress(a))
''' 
   
class Solution:
    
    def check(self, str_lists):
        
        for char in str_lists:
            if len(char) == 1 and 35 <= ord(char) <= 126:
                return True
            else:
                return False

    
    def compress(self, str_lists):
        
        if self.check(str_lists):
            new_list = []
            
            while len(str_lists):
                
                key = str_lists.pop(0)
        
                new_list.append(key)
                count = 1
                for item in str_lists:
                    if item == key: 
                        count += 1
                new_list.append(count)
                str_lists = [item for item in str_lists if item != key]
                
            return new_list
'''            
    def not_duplicate(self, str_lists):
        
        final_lists = []
        for item in str_lists:
            
            if item not in final_lists:
                final_lists.append(item)
                
        return final_lists
'''

'''               
    def compress(self, str_lists):
        if self.check(str_lists):
        
            new_list = []
            final_lists = self.not_duplicate(str_lists)
        
            for key in final_lists:
                count = 0
                for item in str_lists:
                    if item == key:
                        count += 1                      
                new_list.append(key)
                new_list.append(str(count))
        
            return len(new_list)
    
        else:
            raise ValueError('input list is not formal!')
'''
        
a = ["a","a","b","b","c","c","c"]
t = Solution()
print(t.compress(a))     
            
    
            
    