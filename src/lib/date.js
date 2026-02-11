export function parseIsoDateLocal(value) {
  if (typeof value !== "string") return null;
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

export function formatDisplayDate(value, locale, options = {}) {
  const date = parseIsoDateLocal(value);
  if (!date) return value;

  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...options
  });
}
