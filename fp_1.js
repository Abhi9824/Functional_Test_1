const users = [
  {
    id: 1,
    name: "Alice",
    videos: [
      { title: "Intro", size: 80, tags: ["tutorial", "beginner"] },
      { title: "Advanced Tips", size: 120, tags: ["tutorial", "advanced"] },
    ],
  },
  {
    id: 2,
    name: "Bob",
    videos: [
      { title: "Travel Vlog", size: 200, tags: ["travel", "vlog"] },
      { title: "Food Tour", size: 150, tags: ["food", "travel"] },
    ],
  },
];

function analyzeVideos(users) {
  return users.reduce(
    (acc, curr) => {
      //total video size
      const userTotalSize = curr.videos.reduce(
        (acc, curr) => acc + curr.size,
        0
      );

      acc.totalSize += userTotalSize;

      acc.userStorage[curr.name] = userTotalSize;

      //unique tags
      curr.videos.forEach((video) => {
        video.tags.forEach((tag) => acc.uniqueTags.push(tag));
      });

      return acc;
    },
    { totalSize: 0, uniqueTags: [], userStorage: {} }
  );
}

console.log(analyzeVideos(users));

// Task:
// Write a function analyzeVideos(users) that returns a single object:
// Total storage used across all users in MB.

// A flat array of unique tags used in all videos.

// A mapping of each user → total size of their videos.

// Expected format for the result (Actual result may vary):

// {
//   totalSize: 550,
//   uniqueTags: ["tutorial", "beginner", "advanced", .......],
//   userStorage: {
//     Alice: 200,
//     Bob: 350
//   }
// }
