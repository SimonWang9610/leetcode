# -*- coding: utf-8 -*-
"""
Created on Wed Jan 29 17:34:36 2020

@author: Simon
"""

class Solution:
    
    def replaceElements(self, arr):
        
        arr.reverse()
        new_arr = [-1]
        i = 1
        key = arr[0]
        while i <len(arr):
            if arr[i-1] > key:
                key = arr[i-1]
            new_arr.append(key)
            i += 1
        new_arr.reverse()
        return new_arr

t = Solution()
a = [17,18,5,4,6,1]
print(t.replaceElement(a))

def change(arr):
    
    new_arr = [-1]
    key = 0
    
    while len(arr):
        
        t = arr.pop()
        if t > key:
            key = t
        print(key)
        new_arr.append(key)
    new_arr.pop()
    new_arr.reverse()
    return new_arr

