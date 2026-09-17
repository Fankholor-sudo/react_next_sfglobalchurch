const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC"
});

const monthFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  timeZone: 'UTC',
})

export const formatDate = (date: Date | string | number) => {
  return formatter.format(new Date(date));
};

export const formatMonth = (date: Date | string | number) => {
  return monthFormatter.format(new Date(date)).toUpperCase()
}

export const formatDay = (date: string) => {
  return date.split(' ')[0].padStart(2, '0')
}