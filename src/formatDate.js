function formatDate(date) {
  let day = days[date.getDate()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `${day} ${hours}:${minutes}`;
}
