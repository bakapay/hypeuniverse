const Discord = require('discord.js');
exports.run = function(client, message, args) {
     let user = message.mentions.users.first();
	const rating = Math.floor((Math.random() * 500));
const k = new Discord.RichEmbed()
.setAuthor("Command: /psychopass", client.user.avatarURL)
.setDescription("**Description:** Check someone's crime coefficient\n**Usage:** /psychopass [user]\n**Example:** /psychopass <@419132332407128064>")
.setFooter("Requested by " + message.author.username)
.setColor(0x070707)	
	
	if (message.mentions.users.size < 1) return message.channel.send(k)
if(rating < 100) return message.channel.send("**:gun: | Crime Coefficient:(" +rating +"%)**\n**"+ user.username +"** is not a target for enforcement action. The trigger of the Dominator will be locked.")
if(rating < 300) return message.channel.send("**:gun: | Crime Coefficient:(" +rating +"%)**\n**"+ user.username +"** is classified as a latent criminal and is a target for enforcement action. The Dominator is set to Non-Lethal Paralyzer mode.")
if(rating > 300) return message.channel.send("**:gun: | Crime Coefficient:(" +rating +"%)**\n**"+ user.username +"** poses a serious threat to the society. Lethal force is authorized. The Dominator will automatically switch to Lethal Eliminator.")
	};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'psychopass',
  description: "Check someone's crime coefficient.",
  usage: 'ban [user]'
};