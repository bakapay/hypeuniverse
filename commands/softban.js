const Discord = require('discord.js');
exports.run = (client, message, args) => {
let xemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHX")
let vemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHV")
  if(!message.guild.member(message.author.id).hasPermission('BAN_MEMBERS')) return message.channel.send(xemoji + " You don't have the correct permission.")
  let member = message.mentions.members.first();

const k = new Discord.RichEmbed()
.setAuthor("Command: /softban", client.user.avatarURL)
.setDescription("**Description:** Softban a member (ban and immediate unban)\n**Usage:** /softban [user] [reason]\n**Example:** /softban <@419132332407128064> Why not?!")
.setFooter("Requested by " + message.author.username)
.setColor(0x070707)

  if (!member) return message.channel.sendEmbed(k)
  if (member.id === message.author.id) return message.channel.send(xemoji + " You cannot softban yourself, baka!")
  if(!member.kickable) return message.channel.send(xemoji + " I'm sorry, but i cannot ban this member.")
  let p2 = args.slice(2).join(' ');
  let reason = "reason"
  if (!p2) {
    reason = xemoji + " No reason provided."
  } else {
    reason = p2
  }
  
  member.send("You were softbanned from " + message.guild).then(
        setTimeout(() => {
          member.ban()
        }, 500))
  
  message.channel.send(vemoji + " **" + member.user.tag + "** was softbanned successfully by **" + message.author.tag + "**.")
		
    let mod = new Discord.RichEmbed()
    .setAuthor("Softban | " + message.guild, member.user.avatarURL)
	.addField("User", member.user.username, true)
	.addField("Reason", reason, true)
	.setFooter("Softbanned by " + message.author.username)
    .setTimestamp()
    .setColor(0x070707)
    message.channel.send(mod).then(
	  setTimeout(() => {
      message.guild.unban(member);
     }, 500))
	
	
	
  };
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'softban',
  description: 'COX.',
  usage: 'search <words>'
};
  


