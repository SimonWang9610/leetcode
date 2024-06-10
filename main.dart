class Solution {
  int minimumFuelCost(List<List<int>> roads, int seats) {
    final tree = <int, List<int>>{};
    final seen = <int>{};
    int cost = 0;

    for (final road in roads) {
      if (tree.containsKey(road[0])) {
        tree[road[0]]!.add(road[1]);
      } else {
        tree[road[0]] = [road[1]];
      }

      if (tree.containsKey(road[1])) {
        tree[road[1]]!.add(road[0]);
      } else {
        tree[road[1]] = [road[0]];
      }
    }

    print(tree);

    int dfs(int city) {
      if (seen.contains(city)) {
        return 0;
      }

      seen.add(city);

      int passengers = 1;

      print(tree[city]);

      for (final adj in tree[city]!) {
        passengers += dfs(adj);
      }

      if (city > 0) {
        cost += (passengers / seats).ceil();
      }

      return passengers;
    }

    dfs(0);

    return cost;
  }
}

void main() {
  final roads = [
    [3, 1],
    [3, 2],
    [1, 0],
    [0, 4],
    [0, 5],
    [4, 6]
  ];

  final s = Solution();
  final result = s.minimumFuelCost(roads, 2);
  print(result);
}
