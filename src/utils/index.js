export function msToRelativeTime(ms) {
  const seconds = ms / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const months = days / 30;
  const years = months / 12;

  return `${years >= 1 ? `${Math.floor(years)}y` : ""} ${
    months >= 1 ? `${Math.floor(months)}m` : ""
  } ${days >= 1 ? `${Math.floor(days)}d` : ""} ${
    hours >= 1 ? `${Math.floor(hours)}h` : ""
  } ${minutes >= 1 ? `${Math.ceil(minutes)}m` : ""}`;
}
