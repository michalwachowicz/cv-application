import { formatDate } from './dateUtil';

const patterns = {
  str: /\[str:(.*?)]/g,
  date: /\[date:(.*?)]/g,
};

const formatTitle = (item, str) =>
  str
    .replace(patterns.str, (_, token) => item[token] || '')
    .replace(patterns.date, (_, token) => {
      const [month, year] = token.split(',');
      return formatDate(item[month] || '', item[year] || '');
    });

export default formatTitle;
