class Solution:
    
    def uniqueOccurrences(self, arr):
        
        counts = []
        while len(arr):
            print(arr)
            temp = arr.pop()
            print(temp,'*')
            count = 1
            for item in arr:
                if item == temp:
                    count += 1
                    arr.remove(item)
            counts.append(count)

        if len(counts) == len(set(counts)):
            return True
        else:
            return False
t = Solution()
a = [-3,0,1,-3,1,1,1,1,1,1,1,1,1,-3,10,0]
print(t.uniqueOccurrences(a))