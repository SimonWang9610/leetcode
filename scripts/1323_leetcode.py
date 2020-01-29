# -*- coding: utf-8 -*-
"""
Created on Tue Jan 28 19:51:45 2020

@author: Simon
"""

class Solution:
    
    def maximum69Number(self, num):
        str_num = str(num)
        for i in range(len(str_num)):
            if str_num[i] == '6':
                # can not 'str_num[i] = '9' 'due to immuability of string
                new_num = num + 3 * 10 **(len(str_num)-i-1)
                break
        return new_num

t = Solution()
print(t.maximum69Number(96969))