const TelegramBot = require('node-telegram-bot-api');
const token = '{token}'; 
const bot = new TelegramBot(token, { polling: true });

const webAppUrl = 'ngrok url'; 

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Open the app", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Open ToDo List App", web_app: { url: webAppUrl } }]
      ]
    }
  });
});
