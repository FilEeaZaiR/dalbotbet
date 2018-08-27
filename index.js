const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "d*";

const ytdl = require('ytdl-core');

const queue = new Map();

var servers = {};







client.login(process.env.TOKEN);


function play(connection, message) {
  
  var server = servers[message.guild.id];

  server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

  server.queue.shift();

  server.dispatcher.on("end", function() { 
    if (server.queue[0]) play(connection, message);

    else connection.disconnect();

  });
}

client.on("ready", () => {

    console.log("Je suis prêt !");
    client.user.setGame("d*help | version bêta");
    

});

client.on('message', async message => { 
    if(message.content === "Bonjour DalBot beta"){
        message.reply("Salut ");
        console.log('Le bot dit bonjour');
    }



    
;
if(message.content === prefix + "infoserveur"){
  var embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription("Information du Discord")
  .addField("nom du discord", message.guild.name)
  .addField("Créé le", message.guild.createdAt)
  .addField("Tu l'as rejoins le", message.member.joinedAt)
  .addField("Nombres de personnes sur le serveur", message.guild.memberCount)

  mesage.channel.sendEmbed(embed)
  }

  


if(message.content === prefix + "ping"){
  var embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescriptionTitle("Ping")
  .setDescription("    ")
  .addField("Ping :", "Non disponible :warning:")
  

  mesage.channel.sendEmbed(embed)
  }
    


    

    if(message.content === prefix + "help") {
      var aide_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:robot: Voici mes catégories d'aide !`)
      .setDescription(`Voici mes commandes disponible :`)
      .setThumbnail(message.author.avatarURL)
      .addField(":tools: Modération", "Fais `d*mod` pour voir mes commandes de modération !")
      .addField(":tada: Fun", "Fais `d*fun` pour voir mes commandes d'animation !")
      .addField(":musical_note: Musique", "Fais `d*music` pour voir mes commandes musicales !")
      .setFooter("Menu d'aide - DalBot ")
      .setTimestamp()
   
      message.channel.send(aide_embed);
     
    }


    if(message.content === prefix + "invit") {
      var aide_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`Invite-moi sur ton serveur`)
      .setDescription(`Lien d'invitation`)
      .addField("Pour me metre sur votre serveur : " , "c'est simple")
      .addField(" :x: Ce bot ne peux pas être mis sur votre serveur, demander à @TŨţĂℓ ®#8653 Merci !", " le seul lien ")
      .setFooter("Page d'invitation - DalBot by TŨţĂℓ")
      .setTimestamp()
      message.channel.send(aide_embed);
    }

    if(message.content === prefix + "mod") {
      var mod_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:tools: Voici mes commandes modérations !`)
      .setThumbnail(message.author.avatarURL)
      .addField(":no_pedestrians: d*kick <@user>", "Kick l'utilisateur !")
      .addField(":hammer: d*ban <@user>", "Ban l'utilisateur !")
      .addField(":sparkles: d*clear nombre", "Supprime le nombre de messages indiqué")
      .addField(":zipper_mouth: d*mute <@user>", "Mute l'utilisateur mentionné")
      .addField(":smiley: d*unmute <@user>", "Unmute l'utilisateur mentionné")
      .setFooter(":tools: Commande modération - DalBot by TŨţĂℓ")
      .setTimestamp()
      message.channel.send(mod_embed);
    }

    if(message.content === prefix + "fun") {
      var fun_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:tools: Voici mes commandes amusantes !`)
      .setThumbnail(message.author.avatarURL)
      .addField("Bonjour", "Le bot répond !")
      .addField("d*stats", "Le bot vous envoie des informations sur votre profil !")
      .addField("d*info", "Donne des informations sur le bot et le serveur !")
      .setFooter("Commande aumsante - DalBot")
      .setTimestamp()
      message.channel.send(fun_embed);
    }

    if(message.content === prefix + "music") {
      var fun_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:tools: Voici ma commandes musicales !`)
      .setThumbnail(message.author.avatarURL)
      .addField(":headphones: d*play [nom ou lien]", "Lire de la musique")
      .addField(":arrow_right: d*skip", "Passez à la musique suivante")
      .setFooter("Commande musique - DalBot")
      .setTimestamp()
      message.channel.send(fun_embed);
    
    }




    bot.on('ready', function () {
      console.log("pof")
    }); 
  
  
    bot.on('message', function(message) {
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if (command === 'flip'){
       const flip = Math.floor(Math.random() * 2) == 0 ? "face" : "pile"
      const pile = "pile";
      const face = "face";
      let gagnant = message.guild.roles.find("name", "gagant");
      let perdant = message.guild.roles.find("name", "perdant");
      if (!args.length) return message.channel.send(`Mettre pile ou face, ${message.author}!`);
  
      message.channel.send(`Result: **${flip}**!`);
      if (flip == args){
          message.channel.send("gagné");
          message.member.addRole(gagnant).catch(console.error);
          message.channel.send("tu as le role gagnant");
          message.member.removeRole(perdant).catch(console.error);
  
      } else {
          message.channel.send("perdu");
          message.channel.send("tu as le role perdant");
          message.member.addRole(perdant).catch(console.error);
          message.member.removeRole(gagnant).catch(console.error);
      }
      
    }  
  
  });






 
















    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) { 

        case "stats":

        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()
        .setColor("#6699FF")
        .setTitle(`Statistiques du joueurs : ${message.author.username}`)
        .addField(`ID du joueurs :id:`, msgauthor, true)
        .addField(`Date d'inscription du joueur :`, userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply("Tu peux regarder tes messages privés !")
        message.author.send(stats_embed);

        break;
        
  case "play":

    if (!args[1]) {

    message.channel.sendMessage("`Tu dois m’indiquer un lien YouTube`"); 

    return;

  }

    if(!message.member.voiceChannel) {

    message.channel.sendMessage(":x: `Tu dois être dans un salon vocal`"); 

    return;

  }


    if(!servers[message.guild.id]) servers[message.guild.id] = {

    queue: []

  };


  var server = servers[message.guild.id];


  server.queue.push(args[1]);

  if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {

  play(connection, message) 
  

  });

  break; 

  case "skip":

    if(!message.member.voiceChannel) {

    message.channel.sendMessage(":x: `Tu dois être dans un salon vocal`"); 

    return;

  }

    var server = servers[message.guild.id];

    if(server.dispatcher) server.dispatcher.end();

    break;

  case "stop":

    if(!message.member.voiceChannel) 
    
    return message.channel.send(":x: `Tu dois être dans un salon vocal`");

    message.member.voiceChannel.leave();
    

    break;
  
  }

    if(message.content === prefix + "info") {
        var info_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Voici les informations sur moi et le serveur !")
        .addField(" :robot: Nom :", `${client.user.tag}`, true)
        .addField("Descriminateur du bot :hash:", `#${client.user.discriminator}`)
        .addField("ID :id: ", `${client.user.id}`)
        .addField("Nombre de membres", message.guild.members.size)
        .addField("Nombre de catégories et de salons", message.guild.channels.size)
        .setFooter("Info - DalBot")
        message.channel.sendMessage(info_embed)
        console.log("Un utilisateur a effectué la commande d'info !")
    }

    if(message.content.startsWith(prefix + "kick")){
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission!");
    
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez metionner un utilisaeur")
        }
        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe :/")
        }
    
        if(message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission pour kick");
        }
    
        kick.kick().then(member => {
            message.channel.send(`${member.user.username} est kick pas ${message.author.username}`);
        });
    }

    if(message.content.startsWith(prefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la perission");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur");
        }

        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe");
        }

        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission pour ban");
        }
        ban.ban().then(member => {
            message.channel.send(`${member.user.username} est ban par ${message.author.username} !`)
        });
        
    }

    if(message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages à supprimer !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont été supprimés !`);
        });
    }

    if(message.content.startsWith(prefix + "mute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

        if(message.mentions.users.size === 0) {
            return message.channel.send('Vous devez mentionner un utilisateur !');
        }

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
        }

        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
            message.channel.send(`${mute.user.username} est mute !`);
        });
    }

    if(message.content.startsWith(prefix + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

        if(message.mentions.users.size === 0) {
            return message.channel.send('Vous devez mentionner un utilisateur !');
        }

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
        }

        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
            message.channel.send(`${mute.user.username} n'est plus mute !`);
        });
    }

    var fs = require('fs');

let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));

if (message.content.startsWith(prefix + "warn")){

if (message.channel.type === "dm") return;

var mentionned = message.mentions.users.first();

if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);

if(message.mentions.users.size === 0) {

  return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");

}else{

    const args = message.content.split(' ').slice(1);

    const mentioned = message.mentions.users.first();

    if (message.member.hasPermission('MANAGE_GUILD')){

      if (message.mentions.users.size != 0) {

        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {

          if (args.slice(1).length != 0) {

            const date = new Date().toUTCString();

            if (warns[message.guild.id] === undefined)

              warns[message.guild.id] = {};

            if (warns[message.guild.id][mentioned.id] === undefined)

              warns[message.guild.id][mentioned.id] = {};

            const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;

            if (warns[message.guild.id][mentioned.id][warnumber] === undefined){

              warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};

            } else {

              warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),

                time: date,

                user: message.author.id};

            }

            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});

message.delete();

            message.channel.send(':warning: | **'+mentionned.tag+' à été averti**');

message.mentions.users.first().send(`:warning: **Warn |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))

          } else {

            message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");

          }

        } else {

          message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");

        }

      } else {

        message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");

      }

    } else {

      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");

    }

  }

}



  if (message.content.startsWith(prefix+"seewarns")||message.content===prefix+"seewarns") {

if (message.channel.type === "dm") return;

if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);

    const mentioned = message.mentions.users.first();

    const args = message.content.split(' ').slice(1);

    if (message.member.hasPermission('MANAGE_GUILD')){

      if (message.mentions.users.size !== 0) {

        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {

          try {

            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {

              message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");

              return;

            }

          } catch (err) {

            message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");

            return;

          }

          let arr = [];

          arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns :eyes:");

          for (var warn in warns[message.guild.id][mentioned.id]) {

            arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].raison+

            "**\" warn donné par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** a/le **"+warns[message.guild.id][mentioned.id][warn].time+"**");

          }

          message.channel.send(arr.join('\n'));

        } else {

          message.channel.send("Erreur mauvais usage: "+prefix+"seewarns <user> <raison>");

          console.log(args);

        }

      } else {

        message.channel.send("Erreur mauvais usage: "+prefix+"seewarns <user> <raison>");

      }

    } else {

      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");

    }

  }





  if (message.content.startsWith(prefix+"deletewarns")||message.content===prefix+"deletewarns") {

if (message.channel.type === "dm") return;

if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**").catch(console.error);

   const mentioned = message.mentions.users.first();

    const args = message.content.split(' ').slice(1);

    const arg2 = Number(args[1]);

    if (message.member.hasPermission('MANAGE_GUILD')){

      if (message.mentions.users.size != 0) {

        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){

          if (!isNaN(arg2)) {

            if (warns[message.guild.id][mentioned.id] === undefined) {

              message.channel.send(mentioned.tag+" n'a aucun warn");

              return;

            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {

              message.channel.send("**:x: Ce warn n'existe pas**");

              return;

            }

            delete warns[message.guild.id][mentioned.id][arg2];

            var i = 1;

            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){

              var val=warns[message.guild.id][mentioned.id][key];

              delete warns[message.guild.id][mentioned.id][key];

              key = i;

              warns[message.guild.id][mentioned.id][key]=val;

              i++;

            });

            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});

            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {

              delete warns[message.guild.id][mentioned.id];

            }

            message.channel.send(`Le warn de **${mentioned.tag}**\': **${args[1]}** a été enlevé avec succès!`);

            return;

          } if (args[1] === "tout") {

            delete warns[message.guild.id][mentioned.id];

            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});

            message.channel.send(`Les warns de **${mentioned.tag}** a été enlevé avec succès!`);

            return;

          } else {

            message.channel.send("Erreur mauvais usage: "+prefix+"clearwarns <utilisateur> <nombre>");

          }

        } else {

          message.channel.send("Erreur mauvais usage: "+prefix+"clearwarns <utilisateur> <nombre>");

        }

      } else {

       message.channel.send("Erreur mauvais usage: "+prefix+"clearwarns <utilisateur> <nombre>");

      }

    } else {

      message.channel.send("**:x: Vous n'avez pas la permission `Gérer le serveur` dans ce serveur**");

    }

  }

  const réponse = JSON.parse(fs.readFileSync('./eightball.json', "utf8"));
})
