import { getMonthsArray } from "./dateUtils";

const getFormattedMonth = ({ month }) => {
  if (month === undefined || month < 0 || month > 11) return "";

  return getMonthsArray()[month].substring(0, 3);
};

const formatKey = (object, retrievedKey) => {
  const [key, formatter] = retrievedKey.split(":");
  const value = object[key];

  if (!value) return "";

  if (formatter && formatter === "date") {
    return `${getFormattedMonth(value)} ${value.year || ""}`.trim();
  }

  return value;
};

export default function formatText(object, format) {
  return format.replace(/\$\[([^\]]+)\]/g, (_, key) => formatKey(object, key));
}
