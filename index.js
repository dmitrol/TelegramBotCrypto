const {Telegraf, Markup, Context, Scenes, Composer, session,} = require('telegraf');
const dot = require('dotenv');

const cryptoDataManager = require('./modules/api/cryptoDataManager');
const telegramAnswerHandler = require('./modules/answers/telegramAnswerHandler');

const cryptoWizard = require('./modules/scenes/cryptoScene');
const ratesWizard = require('./modules/scenes/ratesScene');

const messeges = require('./modules/templates/messeges');
const keyboards = require('./modules/templates/keyboards');

dot.config();

const token = process.env.TOKEN;

const bot = new Telegraf(token);

bot.start(async (ctx) => await ctx.replyWithHTML(messeges.start, keyboards.mainKeyboard));

bot.help(async (ctx) => await ctx.replyWithHTML(messeges.help, keyboards.mainKeyboard));

bot.command('commands', async (ctx) => {
  try {
    return ctx.setMyCommands([
     {command: 'start', description: 'приветствие'},
     {command: 'help', description: 'помощь по командах'},
     {command: 'main', description: 'главная панель'},
     {command: 'totalInfo', description: 'общая информация'},
     {command: 'rates', description: 'ставки бирж на валюту'},
     {command: 'crypto', description: 'криптовалюты'},
    ]);
  } catch (e) {
    console.log(e);
  }
});

bot.command('main', async (ctx) => {
  await ctx.reply(messeges.main, keyboards.mainKeyboard);
})

bot.command('totalInfo', async (ctx) => {

  try {
    const response = await cryptoDataManager.getRatesByRank(200);
    if(response.errors) {
      ctx.telegram.sendMessage(chatId, messeges.readDataError);
    } else {
      telegramAnswerHandler.randerTotalRates(ctx, response.data);
    }
  } catch (e) {
    console.log('Error in totalInfo command', e);
    await ctx.reply(messeges.defaultError);
  }
})

// Scenes
try {
  const scenes = new Scenes.Stage([cryptoWizard, ratesWizard]);
  bot.use(session());
  bot.use(scenes.middleware());
  bot.command("crypto", Scenes.Stage.enter("cryptoWizard"));
  bot.command('rates', Scenes.Stage.enter('ratesWizard'));
} catch (e) {
  console.log('Error in scenes', e);
}

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'))


