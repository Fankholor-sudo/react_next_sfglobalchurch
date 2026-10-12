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

export const createDate = (dateString: string): number => {
const [day, monthName, year] = dateString.split(' ')

  const months: Record<string, number> = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  }

  const newDate = new Date(Number(year),months[monthName],Number(day))
  newDate.setHours(23, 59, 59, 999)

  return newDate.getTime()
}