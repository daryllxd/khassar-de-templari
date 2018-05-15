import dayjs from 'dayjs';

export function formatDateRange(startedAt, duration) {
  let startDate = dayjs(startedAt);
  let endDate = dayjs(startedAt).add(duration, 'minutes');
  let format = 'h:mm A'

  return `${startDate.format(format)}-${endDate.format(format)}`;
}
