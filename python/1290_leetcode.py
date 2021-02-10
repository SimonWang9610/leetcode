# -*- coding: utf-8 -*-
"""
Created on Tue Jan 28 18:08:43 2020

@author: Simon
"""

class Node:
    
    def __init__(self, data):
        self.val = data
        self.next = None
        
        
class LinkList:
    def __init__(self):
        self.head = None
        
    def push(self, new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node
        
    def reverse(self):
        prev = None
        current = self.head
        while current is not None:
            next = current.next
            current.next = prev
            prev, current = current, next
        
        self.head = prev
        
    def print_list(self):
        temp = self.head
        while temp:
            print(temp.val)
            temp = temp.next
    
        
class Solution:
    
    def getDecimalValue(self, head):
                
        new_list = []
        # head is a 'Node' object
        while head is not None:
            new_list.append(head.val)
            head = head.next

        if len(new_list) <= 30:
            result = 0
            for i in range(len(new_list)):
                result += new_list[i]*2**(len(new_list) - i - 1)
                    
        return result
ll = LinkList()
ll.push(1)
ll.push(0)
ll.push(1)

t = Solution()
print(t.getDecimalValue(ll.head))
#node1 = Node(1)
#node2 = Node(0)
#node3 = Node(1)
#
#node1.next = node2
#node2.next = node3
