export const activityColor = (activity) => {
  switch (activity) {
    case "file-created":
      return "#0891b2";
    case "live-scheduled":
      return "#facc15";
    case "is-live":
      return "#f87171";
    case "article-created":
      return "#14b8a6";
    default:
      return "#C0C0C0";
  }
};
