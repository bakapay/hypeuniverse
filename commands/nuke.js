const Discord = require('discord.js');
exports.run = function(client, message, args){
let xemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHX")
let vemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHV")
let numar = args.slice(1).join(' ');
let member = message.mentions.members.first();

const k = new Discord.RichEmbed()
.setAuthor("Command: /nuke", client.user.avatarURL)
.setDescription("**Description:** Nuke someone\n**Usage:** /nuke <@419132332407128064> 9")
.setFooter("Requested by " + message.author.username)
.setColor(0x070707)

if(!member) return message.channel.send(k)
if(!numar) return message.channel.send(k)
if(numar > 90) return message.channel.send(xemoji + " This is too much, baka!")
    member.send(`**NUKED BY ${message.author.username}**\n`.repeat(numar));
message.channel.send(vemoji + " **NUKED!**")
};
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nuke',
  description: 'COX.',
  usage: 'search <words>'
};