export function getMonthName(monthNumber: number) {
  const date = new Date();
  date.setMonth(monthNumber);

  return date.toLocaleString([], {
    month: "long",
  });
}
