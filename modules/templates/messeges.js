const start =
  'Я помогу узнать свежую информацию по криптовалюте а также ставку национальных валют и металов.'+
  '\n\nОзнакомиться с основными командами здесь /help для общего понимания как работает бот'+
  '\n\n<b>Основные команды</b>'+
  '\n/totalInfo - цены на основные валюты и криптовальты'+
  '\n/rates - цены на валюту и драгметалы'+
  '\n/crypto - криптовалюта инфо'+
  '\n\n/help - справка по командах';

const main = 'Основная панель выберете из вариантов';

const help =
  '<b>Узнать цену</b>'+
  '\n/totalInfo - ценам на основные валюты и криптовальты'+
  '\n/rates - цены на валюту и драгметалы'+
  '\n/crypto - криптовалюта инфо'+
  '\n\n<b>Другие команды</b>'+
  '\n/main - основная панель'

const cryptoQuestion = 'Введите название или символ криптовалюты';
const ratesQuestion = 'Введите или выберете на панели кнопок название или символ котировки';

const cryptoError = '🚫 Криптовалюта с таким названием не найдена';
const ratesError = '🚫 Данные с таким названием не найдены';
const readDataError = '🚫 Ошыбка!!! Не удалось получить данные';
const defaultError = '🚫 Ошыбка!!! Что-то пошло не так';


module.exports = {start, help, main, cryptoQuestion, ratesQuestion, cryptoError, ratesError, readDataError, defaultError};
