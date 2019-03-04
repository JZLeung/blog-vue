import dayjs from 'dayjs'

export const formatDate = (date, format = 'YYYY-MM-DD') =>
  dayjs(date).format(format)
