const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const YEARS = new Array(60)
  .fill(new Date().getFullYear())
  .map((year, index) => year - index);
const formatDate = (month, year) => `${month.slice(0, 2)} ${year}`;

export { MONTHS, YEARS, formatDate };
