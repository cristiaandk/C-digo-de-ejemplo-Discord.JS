// PARA INSTALAR DISCORD.JS V13: yarn/npm/pnpm i discord.js@13 --s

const Discord = require("discord.js");
const client = new Discord.Client({
	intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_BANS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGES]
}); 

// Para los comandos 
client.on("messageCreate", message => {
if(message.author.bot) return;
let prefix = "d/"
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

  // PODEIS DEFINIR prefix agregando despues de args, prefix: ejemplo: commands.run(client, message, args, prefix) Ahí tendriás definido prefix!
    commands.run(client, message, args);
  } catch (e) {
    console.log(e.stack);
  }


})


// Abrimos evento ready para que funcione
client.on('ready', () => {
  console.log(`Sesión iniciada en: ${client.user.tag}!`);
});

client.login('El Token dentro de las comas')
