export function isoDate(date: Date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

/** A record date: `YYYY-MM-DD`, or an ISO 8601 timestamp with a time zone when the day is too coarse. */
export function isRecordDate(value: unknown): value is string {
  return typeof value === "string"
    && /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(?:Z|[+-]\d{2}:\d{2}))?$/.test(value)
    && !Number.isNaN(Date.parse(value));
}

export const RECORD_DATE_FORMAT = "YYYY-MM-DD or an ISO 8601 timestamp with a time zone";
