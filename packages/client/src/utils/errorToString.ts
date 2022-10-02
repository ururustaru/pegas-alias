export const errorToString = (value: any): string => {
    if (!value) {
        return 'Ошибка'
    }
    return value.message;
}