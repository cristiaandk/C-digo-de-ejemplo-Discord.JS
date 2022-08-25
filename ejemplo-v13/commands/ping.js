const Discord = require("discord.js")

// Si no habeis definido alguna de las 4 cosas agregadas os daria error.
exports.run = async (client, message, args, prefix) => {

const embed = new Discord.MessageEmbed()
.setTitle("¡Titulo de ejemplo!") // Menos de 1024 caracteres
.setDescription("¡Descripción de ejemplo!") // Menos de 2048 caracteres
.setColor("BLUE") // Podeis poner código HEX/HTML con #Delante
.addFields({name: 'Nombre de la Field', value: 'Descripción de la Field'}) // En V13 es .addFields() // V12: .addField("Titulo", "Descripción") 
.setFooter("¡Footer de ejemplo!", message.author.displayAvatarURL()) 
message.reply(embed); 




}
