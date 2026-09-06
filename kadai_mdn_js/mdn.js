const event = new Date("september 6, 2026 23:51:30");

console.log(
  event.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);