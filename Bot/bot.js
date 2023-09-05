const { Telegraf } = require('telegraf')

const TOKEN = '6555271608:AAGtD0764eKZRqGFCPekBUhcjJSVg4eGq2I'
const bot = new Telegraf(TOKEN)

const web_link = 'https://64f70b34db727200971b33f2--cheerful-piroshki-3a91c2.netlify.app/';

bot.start((ctx) => ctx.reply('Welcome', { 
        reply_markup: { 
            keyboard: [[{text: 'web app', web_app: {url: web_link} }]] 
        } 
    })
);


bot.launch()