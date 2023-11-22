export function getMonthName(monthNumber: number) {
  const date = new Date();
  date.setMonth(monthNumber);

  return date.toLocaleString([], {
    month: "long",
  });
}

// export function calculateStartandEndDate(startDate: any, endDate: any) {
//   let startDateString = startDate.toLocaleDateString();
//   let endDateString = endDate?.toLocaleDateString();

//   let MonthOfStartDate = startDateString.slice(3, 5);
//   let MonthOfEndDate = endDateString?.slice(3, 5);

//   const Startmonth = getMonthName(MonthOfStartDate).slice(0, 3);
//   const Endmonth = getMonthName(MonthOfEndDate).slice(0, 3);

//   let dateOfStartDate = startDateString.slice(0, 2);
//   let dateOfEndDate = endDateString?.slice(0, 2);

//   const CalculatedStartdate = "" + dateOfStartDate + " " + Startmonth;
//   const CalculatedEnddate = "" + dateOfEndDate + " " + Endmonth;

//   return {
//     CalculatedStartdate,
//     CalculatedEnddate,
//   };
// }
