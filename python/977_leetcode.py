# -*- coding: utf-8 -*-
"""
Created on Fri Jan 31 20:51:43 2020

@author: Simon
"""
class Solution:
             
    def sortedSquares(self, A):
         
        neg_sub_list = []
        pos_sub_list = []
         
        for item in A:
            if item < 0:
                neg_sub_list.append(item**2)
            else:
                pos_sub_list.append(item**2)
        
        new_list = pos_sub_list + neg_sub_list
        
        new_list.sort()
        return new_list

#class Solution:
#    
#    def sortedSquares(self, A):
#        
#        if 1<= len(A) <= 10000:
#
#            neg_list = [i**2 for i in A if -10000 <= i < 0]
#            pos_list = [i**2 for i in A if 0 <= i <= 10000]
#            new_list = []
#            
#            while len(neg_list):
#                temp = neg_list.pop()
#    
#                while len(pos_list):
#                    if pos_list[0] <= temp:
#                        new_list.append(pos_list[0])
#                        pos_list = pos_list[1:]
#                    else:
#                        new_list.append(temp)
#                        break
#                else:
#                    new_list.append(temp)
#                    
#            new_list += pos_list
#    
#            return new_list
#        else:
#            return None

#class Solution:
#    
#    def sortedSquares(self, A):
#        
#        neg_list = [i**2 for i in A if -10000 <= i < 0]
#        pos_list = [i**2 for i in A if 0 <= i <= 10000]
#        new_list = []
#        
#        while len(neg_list):
#            if len(pos_list):
#                temp = neg_list.pop()
#                for item in pos_list:
#                    if temp > item:
#                        new_list.append(item)
#                        pos_list.remove(item)
#                        continue
#                    elif temp <= item:
#                        new_list.append(temp)
#                        break
#            else:
#                new_list.append(neg_list.pop())
#        new_list += pos_list
#        
#        return new_list

t = Solution()
a = [-5,-3,-1,0]
print(t.sortedSquares(a))