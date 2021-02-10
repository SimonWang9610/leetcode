#include "n18.h"

int main() {
    vector<int> v = {1,2,3,3,3,4,4,5,6,7};

    auto result = threeSum(v, 8);
    auto result_k = kSum(v, 8, 0, 3, v[0]);
    print(result);
    print(result_k);
    return 0;
}