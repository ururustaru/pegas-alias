export const errorToString = (value: any): string => {
  if (!value) {
    return ''
  }
  return value.message || 'Ошибка'
}
