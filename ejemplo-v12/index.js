const Discord = require("discord.js");
  const { Client, MessageEmbed, ShardingManager } = require("discord.js");
  const client = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION", "GUILD_MEMBER", "USER"]
  });


  client.on("message", async message => {
    if (message.author.bot) return;


   let prefix = "d/";
    




    if (!message.content.startsWith(prefix)) return;

    
    // HANDLER 
    
    let args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    let command = args.shift().toLowerCase();
    let cmd = message.content.toLowerCase();
    try {

   let commands = require(`./commands/${command}.js`);


      commands.run(client, message, args, prefix);
    } catch (e) {
      console.log(e);
    }



  });


// PARA QUE FUNCIONE EL BOT
  client.on("ready", () => {
    console.log("¡Funcionando!")

  });


  client.login("TOKEN DeNTRO DE LAS COMILLAS");
