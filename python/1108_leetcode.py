# -*- coding: utf-8 -*-
"""
Created on Mon Jan 27 15:43:38 2020

@author: Grad-cb4101
"""
class Solution:
    
    def defangIPaddr(self, addr):
        
        str_addrs = addr.split('.')
        new_addrs = []
        
        if len(str_addrs) == 4:
            for str_addr in str_addrs:
                if 0<= int(str_addr) <= 255:
                    new_addrs.append(str_addr)
        return '[.]'.join(new_addrs)
    
        