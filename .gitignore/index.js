const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    bot.user.setPresence({ game: { name: "Survivor",type: 0}})
    console.log("Bot ready !");
    msg.reply("Salut !");
});

bot.login(process.env.TOKEN);


