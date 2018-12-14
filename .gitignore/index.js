const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    bot.user.setPresence({ game: { name: "Survivor",type: 0}})
    console.log("Bot ready !");
});

bot.login("NTIyNDk1NzQ5Mzg1MDkzMTIx.DvWbTw.Ecg1RE7p4Y83y2euoZzEoaSIEVs");

