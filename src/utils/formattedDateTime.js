export function formatDate(date) {
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  return new Date(date)
    .toLocaleString("en-US", options)
    .replace(/, (?=\d{1,2}:\d{2})/, " ");
}
