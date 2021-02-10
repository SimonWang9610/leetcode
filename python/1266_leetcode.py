# -*- coding: utf-8 -*-
"""
Created on Tue Jan 28 20:50:58 2020

@author: Simon
"""

class Solution:
    
    def minTimeToVisitAllPoints(self, points):
        
        time = 0
        i = 0
        while i <len(points) - 1:
            if points[i][1] == points[i+1][1]:
                time += abs(points[i][0] - points[i+1][0])
            else:
                # 1) y > x
                # 2) y < x
                y = abs(points[i][1] - points[i+1][1])
                x = abs(points[i][0] - points[i+1][0])
                time +=  max(x, y)
            i += 1
        
        return time
    
#    def findDirectLine(self, pa, pb):
#        
#        if pb[0] == pa[0] or pb[1] == pa[1]:
#            return True
#        elif abs(pb[1] - pa[1]) == abs(pb[0] - pa[0]):
#            return True
#        else:
#            
#        


#            if self.findDirectLine(points[i], points[i+1]):
#                if points[i][0] == points[i+1][0]:
#                    time += abs(points[i][1] - points[i+1][1])
#                else:
#                    time += abs(points[i][0] - points[i+1][0])
#            else:
#                time += abs()
#        

