const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    bot.user.setPresence({ game: { name: "Ca marche !",type: 0}})
    console.log("Bot ready !");
});

bot.login(process.env.TOKEN);

