const TelegramBot = require("node-telegram-bot-api")
// console.log(TelegramBot)

require('dotenv').config()
const token = process.env.BOT_TOKEN
// console.log(token)

const math = require("./helpers")
// console.log(math())

const bot = new TelegramBot(token, {
    polling: true
})
// console.log(bot)

bot.on("message", (ctx) => {
    console.log(ctx)
    bot.sendMessage(ctx.chat.id, "Solana Sniper Bot 💰💰: " + ctx.from.username )
})
