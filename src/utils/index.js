export function msToTime(ms) {
  let days = new Date(ms).getDay();

  const years = days / 365;
  days = days % 365;
  const months = days / 30;
  days = days % 30;
  const weeks = days / 7;
  days = days % 7;

  const hours =
    new Date(ms).getHours() - new Date(new Date(ms).getDay()).getHours();
  const minutes =
    new Date(ms).getMinutes() - new Date(new Date(ms).getHours()).getMinutes();
  const seconds =
    new Date(ms).getSeconds() -
    new Date(new Date(ms).getMinutes()).getSeconds();

  return `${years >= 1 ? `${Math.floor(years)}y` : ""} ${
    months >= 1 ? `${Math.floor(months)}mo` : ""
  } ${days >= 1 ? `${Math.floor(days)}d` : ""} ${
    hours >= 1 ? `${Math.floor(hours)}h` : ""
  } ${minutes >= 1 ? `${Math.ceil(minutes)}m` : ""}`;
}

export function optimizeNumbers(number) {
  return Intl.NumberFormat("en", { notation: "compact" }).format(number);
}
