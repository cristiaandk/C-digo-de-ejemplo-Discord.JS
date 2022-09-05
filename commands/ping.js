
// Definimos Discord, no es necesario. (Para funciones extras en Embed y etc) 
const Discord = require("discord.js")


// Podeis definir también prefix si lo teneis definido en index.js en commands.run(client, message, args, **prefix**)
// Codigo de inicio: exports.run = async (client, message, args) => {} 
/// debe esar en todos los comandos que hagais breviamente.
exports.run = async (client, message, args) => {
  
// Ejemplo en V13 de Embed
  
.setDescription("¡Holaaa!")
.setColor("BLUE")
.setTitle("¡Ejemplo!") 
 // en v12 era .addField("Titulo", "Descripción"). Ahora, en V13 es .addFields({name: 'nombre', value: 'descripción'})
.addFields({name: 'titulo de field', value: 'descripción de field'})
.setThumbnail(message.author.displayAvatarURL())
// setThumbnail con message (evento) definido en index.js y importado en commands. author (Autor del mensaje) displayAvatarURL() (Avatar del usuario) 
// Podria ser utilizado tambíen con message.author.tag etc..
 


  
  
  
  
  
  
}
