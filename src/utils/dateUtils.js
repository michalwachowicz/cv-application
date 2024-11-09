const generateYearsArray = () => {
  const array = [];
  let year = new Date().getFullYear();

  while (year > 1900) {
    array.push(year);
    year -= 1;
  }

  return array;
};

const monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const yearsArray = generateYearsArray();

const getMonthsArray = () => monthsArray;
const getYearsArray = () => yearsArray;

export { getMonthsArray, getYearsArray };
