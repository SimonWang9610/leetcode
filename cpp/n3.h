#include <iostream>
#include <string>
#include <unordered_map>

using namespace std;

int lengthOfLongestSubstring(string s) {
    
    if (s.size() == 0) return 0;

    unordered_map<char, int> hash;
    int max = 0;
    int start = 0;
    int end = 0;

    for (int i = 0; i < s.length(); i++) {
        auto ele = hash.find(s[i]);
        if (ele == hash.end()) {
            hash.emplace(s[i], i);
            max = ++end - start;
        } else {
            if (ele->second < start) {
                end++;
            } else {
                max = (end - start + 1 > max)? end - start + 1: max;
                start = end = i;
            }
            ele->second = i;
        }
    }
    return max;
}

//2 cases:
// 1)when inserting new element, start keep unchanged, end increase by 1
//   then, max must be updated instantly: max = ++end - start;
// *:because max is decided whether it need updating during every iteration
//   so its value always follows the lastest [start,end]
//   therefore, we must update max instantly

// 2)if find same element in hashMap, have another 2 cases:
//      <1> found element has less index than current element,
//          means that the current substring has no repeated 'found elment'
//          increase end by 1
//      <2> found element has greater index than current element
//          means that the current substring has repeated 'found element'
//          reset start = end = i
//  *:finally, keep the same element has the latest index: ele->second = i
//  because hashMap must keep latest information to comparw with the next elements
