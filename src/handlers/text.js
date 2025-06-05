module.exports = (bot) => {
  bot.on('text', (ctx) => {
    const text = ctx.message.text.trim().toLowerCase();

    // Sticker que quieres enviar
    const stickerId = 'CAACAgQAAxkBAgh5LmhB3IZTOV_Ef6igXgMnuQ-bIKlCAAKhBwACaq_lAAHivIxJtG9BfTYE';

    // Caso 1: Solo números y termina en 5
    if (/^\d+$/.test(text) && text.endsWith('5')) {
      ctx.reply('¡Por el culo te la hinco!');
      return ctx.replyWithSticker(stickerId);
    }

    // Caso 2: Frase que contiene "5" o "cinco"
    if (/\b5\b/.test(text) || /\bcinco\b/.test(text)) {
      ctx.reply('¡Por el culo te la hinco!');
      return ctx.replyWithSticker(stickerId);
    }
  });
};
