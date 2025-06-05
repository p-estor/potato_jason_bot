require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Comandos
const pingCommand = require('./commands/ping');
const cincoCommand = require('./commands/cinco');

// Handlers
const startHandler = require('./handlers/start');
const textHandler = require('./handlers/text');

// Registrar comandos
bot.start(startHandler);
bot.command('ping', pingCommand);
bot.command('cinco', cincoCommand)

textHandler(bot);

// Lanzar el bot
bot.launch();

console.log('🤖 Potato Jason Bot iniciado');
