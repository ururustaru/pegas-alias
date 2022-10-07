export const pattern = (): Record<string, RegExp> => {
    return {
        name: /^[A-ZА-Я][a-zа-я]+$/,
        email: /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/,
        login: /^(?=.*[a-zA-Z])[\w-]{3,20}$/,
        password: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{8,40}$/,
        phone: /^[+]?[0-9]{10,15}$/,
        message: /[^\s]/,
    }
}