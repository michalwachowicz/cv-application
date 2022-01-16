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
const formatDate = (month, year) =>
  `${month ? month.slice(0, 3) : ''}${month && year ? ' ' : ''}${year || ''}`;

export { MONTHS, YEARS, formatDate };
