const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC"
});

export const formatDate = (date: Date | string | number) => {
  return formatter.format(new Date(date));
};