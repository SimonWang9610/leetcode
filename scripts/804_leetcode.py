# -*- coding: utf-8 -*-
"""
Created on Wed Jan 29 17:10:05 2020

@author: Simon
"""
morse = [".-","-...","-.-.","-..",
             ".","..-.","--.","....","..",
             ".---","-.-",".-..","--","-.",
             "---",".--.","--.-",".-.","...",
             "-","..-","...-",".--","-..-","-.--","--.."]
letters = [chr(i) for i in range(97, 123)]

#class Solution:
#    
#
#    def uniqueMorseRepresentations(self, words):
#        
#        new_set = set()
#        for word in words:
#            new_code = ''
#            for letter in word:
#                new_code += morse[ord(letter) - 97]
#            new_set.add(new_code)
#        
#        return len(new_set)

letters = [chr(i) for i in range(97, 123)]
map_table = {key :value for key, value in zip(letters, morse)}

class Solution:
    def uniqueMorseRepresentations(self, words):
        
        new_set = set()
        for word in words:
            new_code = ''
            for letter in word:
                new_code += map_table[letter]
            new_set.add(new_code)
        
        return len(new_set)
