export const deleteByValue = (givenArray: any[], prop: string, value: string | number | boolean): any[] => {
  return givenArray.filter((item: any) => {
    return item[prop] !== value;
  });
}
