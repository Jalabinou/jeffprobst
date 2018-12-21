const Discord = require("discord.js");
const bot = new Discord.Client();
const client = new Discord.Client();
var partie1encours = "Non"
var partie1players = 0

bot.on("ready", () => {
    bot.user.setPresence({ game: { name: "Survivor",type: 0}})
    console.log("Bot ready !");
    bot.channels.get ("524934313859350529"). sendMessage ("```Le bot a ete demarre avec succes !```")
if (partie1encours = "Non"){
    bot.channels.get ("524934503278313473"). sendMessage ("@everyone ```Le Serveur Partie 1 est disponible ! 0/10```")
    .then(message => {
        p1ann = message.id
        console.log(p1ann)
        m1 = message
        c1 = message.channel
})}})

bot.on('message', message => {
    if (message.content === "ok"){
        makeChannel(message);
        message.reply("Heureux de te revoir parmis nous.");
}})

bot.on('message', message => {
    if (message.content === "youhou"){
        hihi(message)

}})

bot.on('message', msg => {
    if (msg.content === "forcepartie1"){
        bot.channels.get ("524934503278313473"). sendMessage ("@everyone ```Le Serveur Partie 1 est disponible ! Faites !partie1join pour la rejoindre ! Faites vite !```")
        bot.channels.get ("524934503278313473"). sendMessage ("```La Partie 1 est ouverte !```")
}})

bot.on('message', message => {

    var sender = message.author;
    var msg = message.content.toUpperCase();

    if (message.content === "partie1join"){
        if (message.channel.id === "524934503278313473") {
            message.delete()
            let INSCRITPARTIE1 = message.guild.roles.find("name", "Inscrit(e) Partie 1");
            if (message.member.roles.has(INSCRITPARTIE1.id)) {
            } else {
                message.member.addRole(INSCRITPARTIE1);
                AJOUTERPARTIE1PLAYERS();
                makeChannel(message);
                message.channel.fetchMessage (p1ann)
                .then(message => {
                message.edit("@everyone ```Le Serveur Partie 1 est disponible ! " + partie1players + "/10```")
                })

}}}})

bot.on('message', message => {

    var sender = message.author;
    var msg = message.content.toUpperCase();
    var named = message.author.username;
    var confessionnal = "-confessionnal"
    var nameconfessionnal = named + confessionnal
    var nameMconfessionnal = nameconfessionnal.toLowerCase();
    var server = message.guild;

    if (message.content === "partie1quit"){
        if (message.channel.id === "524934503278313473") {
            message.delete()
            let INSCRITPARTIE1 = message.guild.roles.find("name", "Inscrit(e) Partie 1");
            if(message.member.roles.has(INSCRITPARTIE1.id)) {
                message.member.removeRole(INSCRITPARTIE1);
                let category = server.channels.find(c => c.name == "Confessionnaux Partie 1" && c.type == "category"),
                channel = server.channels.find(c => c.name == nameMconfessionnal && c.type == "text");
                if (category && channel) channel.delete();
                else console.error(`One of the channels is missing:\nCategory: ${!!category}\nChannel: ${!!channel}`+ nameconfessionnal);
                ENLEVERPARTIE1PLAYERS();
                message.channel.fetchMessage (p1ann)
                .then(message => {
                message.edit("@everyone ```Le Serveur Partie 1 est disponible ! " + partie1players + "/10```")
                })

}}}})

function AJOUTERPARTIE1PLAYERS(){
    partie1players = partie1players + 1
    console.log(partie1players)
    }

function ENLEVERPARTIE1PLAYERS(){
    partie1players = partie1players - 1
    console.log(partie1players)
}

function waitSeconds(iMilliSeconds) {
    var counter= 0
        , start = new Date().getTime()
        , end = 0;
    while (counter < iMilliSeconds) {
        end = new Date().getTime();
        counter = end - start;
    }
}

function makeChannel(message){
    var server = message.guild;
    var named = message.author.username;
    var confessionnal = "-confessionnal"
    var nameconfessionnal = named + confessionnal

    server.createChannel(nameconfessionnal)
        .then(channel => {
            channel.setParent('524621808801153034');
            var nid = channel.id
            bot.channels.get (nid). sendMessage (message.author.toString() + " Voici ton confessionnal pour la Partie !")
            setTimeout(function(){
            hihi(message)
            }, 1000)
})}

function hihi(message){       
    var sender = message.author;
    var msg = message.content.toUpperCase();
    var named = message.author.username;
    var confessionnal = "-confessionnal"
    var nameconfessionnal = named + confessionnal
    var nameMconfessionnal = nameconfessionnal.toLowerCase();
    var server = message.guild;
    console.log(nameMconfessionnal)
    let category = server.channels.find(c => c.name == "Confessionnaux Partie 1" && c.type == "category"),
    channel = server.channels.find(c => c.name == nameMconfessionnal && c.type == "text");
    if (category && channel) channel.overwritePermissions(message.author.id,{'VIEW_CHANNEL':true, 'MANAGE_CHANNELS':false, 'ADD_REACTIONS':true, 'READ_MESSAGES':true, 'SEND_TTS_MESSAGES':false, 'MANAGE_MESSAGES':false, 'CREATE_INSTANT_INVITE':true, 'SEND_MESSAGES':true, 'EMBED_LINKS':true, 'MANAGE_GUILD':false, 'USE_EXTERNAL_EMOJIS':true, 'MANAGE_WEBHOOKS':false, 'MANAGE_ROLES_OR_PERMISSIONS':false, 'READ_MESSAGE_HISTORY':true, 'ATTACH_FILES':true, 'MENTION_EVERYONE':false});
    channel.overwritePermissions(message.guild.roles.find('name', '@everyone'),{'VIEW_CHANNEL':false, 'MANAGE_CHANNELS':false, 'ADD_REACTIONS':false, 'READ_MESSAGES':false, 'SEND_TTS_MESSAGES':false, 'MANAGE_MESSAGES':false, 'CREATE_INSTANT_INVITE':false, 'SEND_MESSAGES':false, 'EMBED_LINKS':false, 'MANAGE_GUILD':false, 'USE_EXTERNAL_EMOJIS':false, 'MANAGE_WEBHOOKS':false, 'MANAGE_ROLES_OR_PERMISSIONS':false, 'READ_MESSAGE_HISTORY':false, 'ATTACH_FILES':false, 'MENTION_EVERYONE':false});
}

bot.login(process.env.TOKEN);
