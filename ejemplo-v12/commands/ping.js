// PARA INSTALAR DISCORD.JS V12: yarn/npm/pnpm i discord.js@12 --s

const Discord = require("discord.js")

// Si no habeis definido alguna de las 4 cosas agregadas os daria error.
// En todos los comandos debe usar: exports.run = async (client, message, args, prefix) => {}
exports.run = async (client, message, args, prefix) => {

const embed = new Discord.MessageEmbed()
.setTitle("¡Titulo de ejemplo!") // Menos de 1024 caracteres
.setDescription("¡Descripción de ejemplo!") // Menos de 2048 caracteres
.setColor("BLUE") // Podeis poner código HEX/HTML con #Delante
.addField("Titulo de la Field", "Descripción de la Field")  // En V13 es .addFields() // V12: .addField("Titulo", "Descripción") 
.setFooter("¡Footer de ejemplo!", message.author.displayAvatarURL()) 
message.channel.send(embed); 




}
