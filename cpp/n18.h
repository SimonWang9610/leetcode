#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>

using namespace std;

void print(vector<vector<int>>& v) {
    for (auto it = v.begin(); it != v.end(); it++) {
        for(auto ele = it->begin(); ele != it->end(); ele++) {
            std::cout << *ele << " ";
        }
        std::cout << std::endl;
    }
    std::cout << "----------------------------" << std::endl;
}

vector<int> twoSumPointer(vector<int>& nums, int target) {
    int* start = &nums[0];
    int* end = &nums[nums.size() - 1];

    while (start < end) {
        int temp = *start + *end;
        if (temp == target) {
            return {*start, *end};
        } else if (temp > target) {
            end--;
        } else {
            start++;
        }
    }
    return {*start, *end};
}

vector<vector<int>> twoSumHash(vector<int>& nums, int target, int start, int left) {
    vector<vector<int>> result;
    unordered_set<int> hash;

    for (int i = start; i < nums.size(); i++) {
        if (result.empty() || result.back()[2] != nums[i]) {
            auto offset = target - nums[i];
            if (hash.count(offset)) {
                result.push_back({left, offset, nums[i]});
            } else {
                hash.emplace(nums[i]);
            }
        } 
    }
    return result;
}

vector<vector<int>> threeSum(vector<int>& nums, int target) {
    vector<vector<int>> result;
    for (int i = 0; i < nums.size(); i++) {
        int offset = target - nums[i];
        auto temp = twoSumHash(nums, offset, i + 1, nums[i]);
        if (result.empty()) {
            result = temp;
        } else {
            result.insert(result.end(), temp.begin(), temp.end());
        }
    }
    return result;
}

vector<vector<int>> kSum(vector<int>& nums, int target, int start, int k, int left) {
    vector<vector<int>> result;

    if (nums.size() < k) return result;
    if (nums[0] * k > target) return result;
    if (nums[nums.size() - k - 1] * k < target) return result;
    if (k == 2) return twoSumHash(nums, target, start, left);

    for (int i = start; i < nums.size(); i++) {
        int offset = target - nums[i];
        auto temp = kSum(nums, offset, i + 1, k - 1, nums[i]);

        if (result.empty()) {
            result = temp;
        } else {
            result.insert(result.end(), temp.begin(), temp.end());
        }
    }
    return result;
}


/*
TIPS:
    <1> if questions have strong randomness, try to give questions some regular patters
        for example, in this question, we can sort the array to make this question easier to understand
    <2> 
*/
// if nums is sorted, it has some benefits:
// <1> easier to skip duplicate elements, thereby avoiding eliminating duplicate k-lets
// <2> easier to understand the task
// <3> easier to split the question into small tasks
 