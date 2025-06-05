const {telegraf} = requiere ('telegraf');
const bot = new Telegraf('7684892354:AAHh81f5Q_h4DmYTCnpttePRT7fo_w8raqc');

bot.start((ctx) => ctx.reply('Hola'));
bot.command('ping', (ctx) => ctx.reply('pong'));

bot.launch();