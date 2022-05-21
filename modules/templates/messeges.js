const start =
  'Я помогу узнать свежую информацию по криптовалюте а также ставку национальных валют и металов.'+
  '\n\nОзнакомиться с основными командами здесь /help для общего понимания как работает бот'+
  '\n\n<b>Основные команды</b>'+
  '\n/totalInfo - общая информация на даный момент'+
  '\n/rates - ставки бирж на валюту и драгметалы'+
  '\n/crypto - криптовалюты'+
  '\n\n/help - справка по командах';

const main = 'Основная панель выберете из вариантов';

const help =
  '\n\n/totalInfo - общая информация'+
  '\n/rates - ставки инфо'+
  '\n/crypto - криптовалюты инфо'

const cryptoQuestion = 'Введите назание или символ криптовалюты или выберете на панели кнопок';
const ratesQuestion = 'Введите название или символ котировки или выберете на панели кнопок';

const cryptoError = '🚫 Криптовалюта с таким названием не найдена';
const ratesError = '🚫 Запись с таким названием не найдена';
const readDataError = '🚫 Ошыбка!!! Не удалось получить данные';


module.exports = {start, help, main, cryptoQuestion, ratesQuestion, cryptoError, ratesError, readDataError};