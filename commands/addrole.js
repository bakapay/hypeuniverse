const Discord = require('discord.js');
exports.run = (client, message, args) => {
let xemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHX")
let vemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHV")
  if(!message.guild.member(message.author.id).hasPermission('MANAGE_ROLES')) return message.channel.send(xemoji + " You don't have the correct permission.")
  let member = message.mentions.members.first();

const k = new Discord.RichEmbed()
.setAuthor("Command: /addrole", client.user.avatarURL)
.setDescription("**Description:** Add a new role, with optional color\n**Usage:** /addrole [hex color] [name]\n**Example:** /addrole #070707 Chromatic")
.setFooter("Requested by " + message.author.username)
.setColor(0x070707)

  if(!args.slice(1).join(' ')) return message.channel.send(k);
  if(!args[0]) return message.channel.send(k);

  let p2 = args.slice(1).join(' ');
  let p3a = args[0].slice("#");
 
 if(!p3a) return message.channel.send(k);
message.guild.createRole({
  name: p2,
  color: p3a,
  })
  
  message.channel.send(vemoji + " Created role " + p2)
  
   };
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'addrole',
  description: 'COX.',
  usage: 'search <words>'
};




