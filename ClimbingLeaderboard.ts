function climbingLeaderboard(ranked: number[], player: number[]) {
  // Remove duplicates and sort in descending order
  const uniqueRanks: number[] = [...new Set(ranked)].sort((a, b) => b - a);
  const result: number[] = [];
  let index = uniqueRanks.length; // Start from the end of the leaderboard

  player.forEach((score) => {
    // Find the correct rank using binary search
    while (index > 0 && score >= uniqueRanks[index - 1]) {
      index--;
    }
    result.push(index + 1); // +1 because ranks are 1-based
  });

  return result;
}

const ranked = [100, 90, 90, 80, 75, 60];
const player = [50, 65, 77, 90, 102];
console.log(climbingLeaderboard(ranked, player));
