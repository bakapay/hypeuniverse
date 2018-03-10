const Discord = require('discord.js');
exports.run = function(client, message, args) {
let xemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHX")
let vemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHV")
const k = new Discord.RichEmbed()
.setAuthor("Command: /purge", client.user.avatarURL)
.setDescription("**Description:** Delete a number of messages from a channel. (limit 100)\n**Usage:** /purge [count]\n**Example:** /purge 53")
.setFooter("Requested by " + message.author.username)
.setColor(0x070707)

    const deleteCount = parseInt(args[0], 10); 
 if (!message.guild.member(message.author.id).hasPermission("MANAGE_MESSAGES")) return message.channel.send(xemoji + " You don't have the correct permission.") 
  if(!deleteCount || deleteCount < 2 || deleteCount > 100) return message.channel.send(k)
  message.delete() 
message.channel.fetchMessages({
  }).then(messages => message.channel.bulkDelete(deleteCount))
	message.channel.send(vemoji + " Deleting " + deleteCount + " messages.").then(	
	setTimeout(() => {
	message.channel.bulkDelete(deleteCount)
        }, 500))

  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'purge',
  description: 'Delete some messages from a guild.',
  usage: 'purge <number>'
};