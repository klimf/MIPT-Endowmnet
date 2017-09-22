export const required = (val) => val ? undefined : 'Обязательное поле';

const digitsReg = /[0-9]+/;
export const onlyDigits = (val) => digitsReg.test(val) ? undefined : 'Только цифры';

const latinReg = /[A-Za-z0-9-]+/;
export const onlyLatin = (val) => latinReg.test(val) ? undefined : 'Только латинские буквы';
