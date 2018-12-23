const Discord = require("discord.js");
const bot = new Discord.Client();
const client = new Discord.Client();
var partie1encours = "Non"
var partie1players = 0


challengepointswazerpartie1 = 0
challengepointstokotapartie1 = 0
losingtribepartie1 = "null"
precedentbootpartie1 = "null"
autordre1 = "false"
autordre2 = "false"
autordre3 = "false"
autordre4 = "false"
autordre5 = "false"


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

bot.on('message', message => {
    if (message.content === "miaou"){
        timetovotepartie1(message)

}})

bot.on('message', message => {
    if (message.content === "rand"){
        epreuveordresfnc1(message)

}})

bot.on('message', msg => {
    if (msg.content === "forcepartie1"){
        bot.channels.get ("524934503278313473"). sendMessage ("@everyone ```Le Serveur Partie 1 est disponible ! Faites !partie1join pour la rejoindre ! Faites vite !```")
        bot.channels.get ("524934503278313473"). sendMessage ("```La Partie 1 est ouverte !```")
}})

bot.on('message', message => {
    if (message.content === "epreuvetest"){
        epreuveordrespartie1(message)
}})

bot.on('message', message => {
    if (message.content === "cas1"){
        losingtribepartie1 = "wazer"
        precedentbootpartie1 = message.author.username
}})

bot.on('message', message => {
    if (message.content === "alpha"){
        tribalcouncilpartie1(message)
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

function epreuveordrespartie1(message){
    challengepointswazerpartie1 = 0
    challengepointstokotapartie1 = 0
    bot.channels.get ("526020053095940097"). sendMessage ("@everyone")
    bot.channels.get ("526020053095940097"). sendMessage ("```Come on in guys !```")
    setTimeout(function(){
    if (losingtribepartie1 === "tokota"){
        var WAZER1 = message.guild.roles.find("name", "Wazer");
        bot.channels.get ("526020053095940097"). sendMessage (WAZER1 + " ```Jetez un oeil a la nouvelle tribu Tokota ...```")
    }
    if (losingtribepartie1 === "wazer"){
        var TOKOTA1 = message.guild.roles.find("name", "Tokota");
        bot.channels.get ("526020053095940097"). sendMessage (TOKOTA1 + "```Jetez un oeil a la nouvelle tribu Wazer ...```")
    }
    if (losingtribepartie1 === "null"){
        bot.channels.get ("526020053095940097"). sendMessage ("```Bienvenue a tous pour votre tout premier challenge !```")
    }
    }, 5000)
    setTimeout(function(){
    if (precedentbootpartie1 === "null"){
        var loooool = 1
    }
    else bot.channels.get ("526020053095940097"). sendMessage ("```" + precedentbootpartie1 + " a ete elimine au precedent Tribal Council ...```")
    }, 10000)
    setTimeout(function(){
    bot.channels.get ("526020053095940097"). sendMessage ("```Allons a notre challenge du jour !```")
    }, 15000)
    setTimeout(function(){
    bot.channels.get ("526020053095940097"). sendMessage ("```L'epreuve du jour est l'epreuve des Ordres .```")
    }, 20000)
    setTimeout(function(){
    bot.channels.get ("526020053095940097"). sendMessage ("```Les regles sont les suivantes : vous allez devoir executer une serie d'ordres . A chaque tour, la personne la plus rapide fait gagner 1 point a son equipe . La premiere equipe a 3 points remporte le challenge .```")
    }, 25000)
    setTimeout(function(){
    bot.channels.get ("526020053095940097"). sendMessage ("```Survivors ready ?```")
    }, 35000)
    setTimeout(function(){
    bot.channels.get ("526020053095940097"). sendMessage ("```Go !```")
    }, 40000)
    setTimeout(function(){
    bot.channels.get ("526020053095940097"). sendMessage ("```[!] Le prochain tour a lieu dans 5 secondes ... [!]```")
    }, 40000)
    setTimeout(function(){
    epreuveordresfnc1(message)
    }, 45000)
}

function epreuveordresfnc1(message){
    min = Math.ceil(1);
    max = Math.floor(5);
    randnum = Math.floor(Math.random() * (max - min +1)+ min)
    console.log(randnum)
    if (randnum === 1){
        bot.channels.get ("526020053095940097"). sendMessage ("```Repetez le mot COOKIE en minuscules .```")
        autordre1 = "true"
    }
    if (randnum === 2){
        bot.channels.get ("526020053095940097"). sendMessage ("```Immitez le cri de la vache (en minuscules et en 4 lettres uniquement) .```")
        autordre2 = "true"
    }
    if (randnum === 3){
        bot.channels.get ("526020053095940097"). sendMessage ("```Ecrivez PONEYS en minuscule et a l'envers .```")
        autordre3 = "true"
    }
    if (randnum === 4){
        bot.channels.get ("526020053095940097"). sendMessage ("```Ecrivez ici mon #???? en remplacant le # par un A majuscule .```")
        autordre4 = "true"
    }
    if (randnum === 5){
        bot.channels.get ("526020053095940097"). sendMessage ("```Trouvez l'intrus : rouge - jaune - bleu - vert .```")
        autordre5 = "true"
    }
}

bot.on('message', message => {
    if (message.content === "cookie"){
        if (autordre1 === "true"){
            bot.channels.get ("526020053095940097"). sendMessage ("```Bravo a " + message.author.username + " qui fait gagner un point a son equipe !```")
            let winnerq1 = message.guild.roles.find("name", "Wazer")
            let winnerq2 = message.guild.roles.find("name", "Tokota")
            if (message.member.roles.has(winnerq1.id)) {
                challengepointswazerpartie1 = challengepointswazerpartie1 + 1
                autordre1 = "false"
            }
            if (message.member.roles.has(winnerq2.id)) {
                challengepointstokotapartie1 = challengepointstokotapartie1 + 1
                autordre1 = "false"
            }
            setTimeout(function(){
            bot.channels.get ("526020053095940097"). sendMessage ("```Tokota " + challengepointstokotapartie1 + " - " + challengepointswazerpartie1 + " Wazer```")
            }, 5000)
            if (challengepointswazerpartie1 < 3){
                if (challengepointstokotapartie1 < 3){
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```[!] Le prochain tour a lieu dans 5 secondes ... [!]```")
                    }, 10000)
                    setTimeout(function(){
                    epreuveordresfnc1(message)
                    }, 15000)
                }
            }
            if (challengepointswazerpartie1 > 2){
                if (challengepointstokotapartie1 < 4){
                    losingtribepartie1 = "tokota"
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Wazer remporte l'immunite !```")
                    }, 10000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Pour vous Tokota, Tribal Council ce soir, ou l'un d'entre vous devra rentrer chez lui .```")
                    }, 15000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Rentrez sur votre campement, bonne journee !```")
                    }, 20000)
                }
            }
            if (challengepointstokotapartie1 > 2){
                if (challengepointswazerpartie1 < 4){
                    losingtribepartie1 = "wazer"
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Tokota remporte l'immunite !```")
                    }, 10000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Pour vous Wazer, Tribal Council ce soir, ou l'un d'entre vous devra rentrer chez lui .```")
                    }, 15000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Rentrez sur votre campement, bonne journee !```")
                    }, 20000)
                }
            }

}}})

bot.on('message', message => {
    if (message.content === "meuh"){
        if (autordre2 === "true"){
            bot.channels.get ("526020053095940097"). sendMessage ("```Bravo a " + message.author.username + " qui fait gagner un point a son equipe !```")
            let winnerq1 = message.guild.roles.find("name", "Wazer")
            let winnerq2 = message.guild.roles.find("name", "Tokota")
            if (message.member.roles.has(winnerq1.id)) {
                challengepointswazerpartie1 = challengepointswazerpartie1 + 1
                autordre2 = "false"
            }
            if (message.member.roles.has(winnerq2.id)) {
                challengepointstokotapartie1 = challengepointstokotapartie1 + 1
                autordre2 = "false"
            }
            setTimeout(function(){
            bot.channels.get ("526020053095940097"). sendMessage ("```Tokota " + challengepointstokotapartie1 + " - " + challengepointswazerpartie1 + " Wazer```")
            }, 5000)
            if (challengepointswazerpartie1 < 3){
                if (challengepointstokotapartie1 < 3){
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```[!] Le prochain tour a lieu dans 5 secondes ... [!]```")
                    }, 10000)
                    setTimeout(function(){
                    epreuveordresfnc1(message)
                    }, 15000)
                }
            }
            if (challengepointswazerpartie1 > 2){
                if (challengepointstokotapartie1 < 4){
                    losingtribepartie1 = "tokota"
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Wazer remporte l'immunite !```")
                    }, 10000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Pour vous Tokota, Tribal Council ce soir, ou l'un d'entre vous devra rentrer chez lui .```")
                    }, 15000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Rentrez sur votre campement, bonne journee !```")
                    }, 20000)
                }
            }
            if (challengepointstokotapartie1 > 2){
                if (challengepointswazerpartie1 < 4){
                    losingtribepartie1 = "wazer"
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Tokota remporte l'immunite !```")
                    }, 10000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Pour vous Wazer, Tribal Council ce soir, ou l'un d'entre vous devra rentrer chez lui .```")
                    }, 15000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Rentrez sur votre campement, bonne journee !```")
                    }, 20000)
                }
            }

}}})

bot.on('message', message => {
    if (message.content === "syenop"){
        if (autordre3 === "true"){
            bot.channels.get ("526020053095940097"). sendMessage ("```Bravo a " + message.author.username + " qui fait gagner un point a son equipe !```")
            let winnerq1 = message.guild.roles.find("name", "Wazer")
            let winnerq2 = message.guild.roles.find("name", "Tokota")
            if (message.member.roles.has(winnerq1.id)) {
                challengepointswazerpartie1 = challengepointswazerpartie1 + 1
                autordre3 = "false"
            }
            if (message.member.roles.has(winnerq2.id)) {
                challengepointstokotapartie1 = challengepointstokotapartie1 + 1
                autordre3 = "false"
            }
            setTimeout(function(){
            bot.channels.get ("526020053095940097"). sendMessage ("```Tokota " + challengepointstokotapartie1 + " - " + challengepointswazerpartie1 + " Wazer```")
            }, 5000)
            if (challengepointswazerpartie1 < 3){
                if (challengepointstokotapartie1 < 3){
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```[!] Le prochain tour a lieu dans 5 secondes ... [!]```")
                    }, 10000)
                    setTimeout(function(){
                    epreuveordresfnc1(message)
                    }, 15000)
                }
            }
            if (challengepointswazerpartie1 > 2){
                if (challengepointstokotapartie1 < 4){
                    losingtribepartie1 = "tokota"
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Wazer remporte l'immunite !```")
                    }, 10000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Pour vous Tokota, Tribal Council ce soir, ou l'un d'entre vous devra rentrer chez lui .```")
                    }, 15000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Rentrez sur votre campement, bonne journee !```")
                    }, 20000)
                }
            }
            if (challengepointstokotapartie1 > 2){
                if (challengepointswazerpartie1 < 4){
                    losingtribepartie1 = "wazer"
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Tokota remporte l'immunite !```")
                    }, 10000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Pour vous Wazer, Tribal Council ce soir, ou l'un d'entre vous devra rentrer chez lui .```")
                    }, 15000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Rentrez sur votre campement, bonne journee !```")
                    }, 20000)
                }
            }

}}})

bot.on('message', message => {
    if (message.content === "A4765"){
        if (autordre4 === "true"){
            bot.channels.get ("526020053095940097"). sendMessage ("```Bravo a " + message.author.username + " qui fait gagner un point a son equipe !```")
            let winnerq1 = message.guild.roles.find("name", "Wazer")
            let winnerq2 = message.guild.roles.find("name", "Tokota")
            if (message.member.roles.has(winnerq1.id)) {
                challengepointswazerpartie1 = challengepointswazerpartie1 + 1
                autordre4 = "false"
            }
            if (message.member.roles.has(winnerq2.id)) {
                challengepointstokotapartie1 = challengepointstokotapartie1 + 1
                autordre4 = "false"
            }
            setTimeout(function(){
            bot.channels.get ("526020053095940097"). sendMessage ("```Tokota " + challengepointstokotapartie1 + " - " + challengepointswazerpartie1 + " Wazer```")
            }, 5000)
            if (challengepointswazerpartie1 < 3){
                if (challengepointstokotapartie1 < 3){
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```[!] Le prochain tour a lieu dans 5 secondes ... [!]```")
                    }, 10000)
                    setTimeout(function(){
                    epreuveordresfnc1(message)
                    }, 15000)
                }
            }
            if (challengepointswazerpartie1 > 2){
                if (challengepointstokotapartie1 < 4){
                    losingtribepartie1 = "tokota"
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Wazer remporte l'immunite !```")
                    }, 10000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Pour vous Tokota, Tribal Council ce soir, ou l'un d'entre vous devra rentrer chez lui .```")
                    }, 15000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Rentrez sur votre campement, bonne journee !```")
                    }, 20000)
                }
            }
            if (challengepointstokotapartie1 > 2){
                if (challengepointswazerpartie1 < 4){
                    losingtribepartie1 = "wazer"
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Tokota remporte l'immunite !```")
                    }, 10000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Pour vous Wazer, Tribal Council ce soir, ou l'un d'entre vous devra rentrer chez lui .```")
                    }, 15000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Rentrez sur votre campement, bonne journee !```")
                    }, 20000)
                }
            }

}}})

bot.on('message', message => {
    if (message.content === "vert"){
        if (autordre5 === "true"){
            bot.channels.get ("526020053095940097"). sendMessage ("```Bravo a " + message.author.username + " qui fait gagner un point a son equipe !```")
            let winnerq1 = message.guild.roles.find("name", "Wazer")
            let winnerq2 = message.guild.roles.find("name", "Tokota")
            if (message.member.roles.has(winnerq1.id)) {
                challengepointswazerpartie1 = challengepointswazerpartie1 + 1
                autordre5 = "false"
            }
            if (message.member.roles.has(winnerq2.id)) {
                challengepointstokotapartie1 = challengepointstokotapartie1 + 1
                autordre5 = "false"
            }
            setTimeout(function(){
            bot.channels.get ("526020053095940097"). sendMessage ("```Tokota " + challengepointstokotapartie1 + " - " + challengepointswazerpartie1 + " Wazer```")
            }, 5000)
            if (challengepointswazerpartie1 < 3){
                if (challengepointstokotapartie1 < 3){
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```[!] Le prochain tour a lieu dans 5 secondes ... [!]```")
                    }, 10000)
                    setTimeout(function(){
                    epreuveordresfnc1(message)
                    }, 15000)
                }
            }
            if (challengepointswazerpartie1 > 2){
                if (challengepointstokotapartie1 < 4){
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Wazer remporte l'immunite !```")
                    losingtribepartie1 = "tokota"
                    }, 10000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Pour vous Tokota, Tribal Council ce soir, ou l'un d'entre vous devra rentrer chez lui .```")
                    }, 15000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Rentrez sur votre campement, bonne journee !```")
                    }, 20000)
                }
            }
            if (challengepointstokotapartie1 > 2){
                if (challengepointswazerpartie1 < 4){
                    losingtribepartie1 = "wazer"
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Tokota remporte l'immunite !```")
                    losingtribepartie1 = "wazer"
                    }, 10000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Pour vous Wazer, Tribal Council ce soir, ou l'un d'entre vous devra rentrer chez lui .```")
                    }, 15000)
                    setTimeout(function(){
                    bot.channels.get ("526020053095940097"). sendMessage ("```Rentrez sur votre campement, bonne journee !```")
                    }, 20000)
                }
            }

}}})

function tribalcouncilpartie1(message){
    console.log(losingtribepartie1)
    if (losingtribepartie1 === "wazer"){
        winnerq1 = message.guild.roles.find("name", "Wazer")
        wawa1 = message.guild.roles.find("name", "Wazer Tribal Council")
        t = message.guild.roles.get(winnerq1.id).members.map(m=>m.user.id)
        console.log(t)
        len = t.length
        console.log(len)
        cal(message)
    }}

function cal (message){
    if (len > 0){
        len = len - 1
        message.guild.fetchMember(t[len]).then(guildMember => {
            guildMember.addRole(wawa1).catch(console.error);
        })
        if (len > 0){
            cal(message)
        }
        if (len === 0){
            bot.channels.get ("526496297130131495"). sendMessage (winnerq1 + "```Bienvenue ce soir au Tribal Council !```")
        }
    }
}

function timetovotepartie1 (message){ //Ne pas oublier de rajouter le test de Wazer / Tokota !
    voteteam = message.guild.roles.find("name", "Wazer")
    oname = message.guild.roles.get(voteteam.id).members.map(m=>m.user.username)
    onamemin = message.guild.roles.get(voteteam.id).members.map(m=>m.user.username.toLowerCase())
    oid = message.guild.roles.get(voteteam.id).members.map(m=>m.user.id)
    olenname = onamemin.length
    olennamebis = onamemin.length
    olenid = oname.id
    tyr(message)
}

function tyr (message){
    var server = message.guild;
    if (olenname > 0){
        olenname = olenname - 1
        let category = server.channels.find(c => c.name == "Confessionnaux Partie 1" && c.type == "category"),
        channel = server.channels.find(c => c.name == onamemin[olenname] + "-confessionnal" && c.type == "text");
        if (category && channel) channel.sendMessage (voteteam + "```L'heure est venue de voter !```")
        if (olenname > 0){
            tyr(message)
        }
        }
}

bot.login(process.env.TOKEN);
