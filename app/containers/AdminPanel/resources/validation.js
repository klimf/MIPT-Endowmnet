import { isCurrency } from 'validator';
export const required = (val) => val ? undefined : 'Обязательное поле';

const digitsReg = /[0-9]+/;
export const onlyDigits = (val) => digitsReg.test(val) ? undefined : 'Только цифры';

const latinReg = /^[a-zA-Z0-9_\-+ ]*$/;
export const onlyLatin = (val) => latinReg.test(val) ? undefined : 'Только латинские буквы';

const urlReg = /^[a-zA-Z0-9_\-+/]*$/;
export const onlyUrl = (val) => urlReg.test(val) ? undefined : 'Только валидный url';
export const currency = (value) => value && isCurrency(value.toString()) ? false : 'Допустимы только цифры';

export const onlyOneNode = (prefix) => (val) => {
  const prefixSplit = prefix.split('/');
  const valSplit = val.split('/');

  if (Math.abs(valSplit.length - prefixSplit.length) >= 1) {
    return (`Сначала нужно создать страницу ${valSplit[prefixSplit.length - 1] || val}`);
  }

  const valPrefix = valSplit.slice(0, valSplit.length - 3);
  const notFoundPrefix = valPrefix.find((x) => !prefixSplit.includes(x));
  if (notFoundPrefix) {
    return (`Сначала нужно создать страницу ${notFoundPrefix}`);
  }
  return null;
};

