export const getFormattedDate = (date: Date) => {
  return date.toISOString().split('T')[0]
}
