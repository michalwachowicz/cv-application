export default function formatText(object, format) {
  return format.replace(/\$\[([^\]]+)\]/g, (_, key) => object[key] || "");
}
