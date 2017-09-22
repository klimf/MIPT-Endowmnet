export const required = (val) => val ? undefined : 'Обязательное поле';

const digitsReg = /[0-9]/;
export const onlyDigits = (val) => digitsReg.test(val) ? undefined : 'Только цифры';
