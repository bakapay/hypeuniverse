const Discord = require('discord.js');
exports.run = (client, message, args) => {
let xemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHX")
let vemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHV")

if(!message.guild.member(message.author.id).hasPermission('MANAGE_SERVER')) return message.channel.send(xemoji + " You don't have the correct permission.")
	

const k = new Discord.RichEmbed()
.setAuthor("Command: /nick", client.user.avatarURL)
.setDescription("**Description:** Change the bot nickname\n**Usage:** /nick [new nickname]")
.setFooter("Requested by " + message.author.username)
.setColor(0x070707)

let nickname = args.slice(0).join(' ');

if(!nickname) return message.channel.send(k)
	
message.guild.member(client.user.id).setNickname(nickname)

message.channel.send(vemoji + " Successfully changed nickname to **" + nickname + "**")

  };
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nick',
  description: 'COX.',
  usage: 'search <words>'
};
