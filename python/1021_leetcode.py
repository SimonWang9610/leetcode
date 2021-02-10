# -*- coding: utf-8 -*-
"""
Created on Wed Jan 29 15:28:44 2020

@author: Simon
"""
#
#class Solution:
#    
#    def findParentheses(self, anchor, s):
#        
#        L = '('
#        R = ')'
#        
#        find_L = 0
#        
#        while anchor < len(s):
#            
#            if s[anchor] == L:
#                find_L += 1
#            if s[anchor] == R:
#                find_L -= 1
#
#            if find_L == 0:
#                return anchor
#            else:
#                anchor += 1
#    
#    def removeOuterParentheses(self, s):
#        
#        i = 0
#        sub_str = ''
#        while i < len(s):
#            
#            # attention the parameter of findParentheses()
#            anchor = self.findParentheses(i, s)
#            print(anchor)
#            sub_str += s[i+1: anchor]
#            i = anchor + 1
#        
#        return sub_str
            


class Solution:
    
    def removeOuterParentheses(self, s):
        
        sub_str = ''
        find_L = 0
        i = 0
        anchor = 0
        
        while i < len(s):
            
            if s[i] == '(':
                find_L += 1
            else:
                find_L -= 1
                
            if find_L == 0:
                sub_str += s[anchor+1:i]
                anchor = i + 1
            i += 1
        
        return sub_str
    
t = Solution()

a = "(()())(())(()(()))"

print(t.removeOuterParentheses(a))
                
