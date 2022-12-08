
export const getDate = (dateISO:string):string => {
  const startTime = new Date(dateISO);
  if( new Date(Date.now()).getDate() !== new Date(startTime).getDate()) {
    return `${new Date(startTime).getDate()}.${new Date(startTime).getMonth()}.${new Date(startTime).getFullYear()}`
  } else {
    return `${new Date(startTime).getHours()}:${new Date(startTime).getMinutes()}`
  }
}

export const getDateDMY = (dateISO:string):string => {
  const startTime = new Date(dateISO);
  return `${new Date(startTime).getDate()}.${new Date(startTime).getMonth()}.${new Date(startTime).getFullYear()}`
}
