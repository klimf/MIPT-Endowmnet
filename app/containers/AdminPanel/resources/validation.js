import { isEmpty, isEmail, isCurrency, isInt, isLength as length, isURL as url } from 'validator';
export const required = (val) => val ? undefined : 'Обязательное поле';

const digitsReg = /[0-9]+/;
export const onlyDigits = (val) => digitsReg.test(val) ? undefined : 'Только цифры';

const latinReg = /^[a-zA-Z0-9_\-+ ]*$/;
export const onlyLatin = (val) => latinReg.test(val) ? undefined : 'Только латинские буквы';

export const currency = (value) => value && isCurrency(value.toString()) ? false : 'Допустимы только цифры';
