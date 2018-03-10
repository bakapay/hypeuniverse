const Discord = require('discord.js');
const ms = require("ms");
exports.run = (client, message, args) => {
let xemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHX")
let vemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHV")
if(!message.guild.member(message.author.id).hasPermission('BAN_MEMBERS')) return message.channel.send(xemoji + " You don't have the correct permission.")
let member = message.mentions.members.first();

const k = new Discord.RichEmbed()
.setAuthor("Command: /ban", client.user.avatarURL)
.setDescription("**Description:** Ban a member, optional time limit\n**Usage:** /ban [user] [limit] [reason]\n**Example:** /ban <@419132332407128064> 1d Why not?!")
.setFooter("Requested by " + message.author.username)
.setColor(0x070707)

  if (!member)
  return message.channel.sendEmbed(k)
  if (member.id === message.author.id) return message.channel.send(xemoji + " You cannot ban yourself, baka!")
  if(!member.kickable) return message.channel.send(xemoji + " I'm sorry, but i cannot ban this member.")
  let p2 = args.slice(2).join(' ');
  let reason = "reason"
  if (!p2) {
    reason = xemoji + " No reason provided."
  } else {
    reason = p2
  }
  let time = args[1]
  let timp = "time"
  if (!time) {
    timp = xemoji + " No time specified."
  } else {
    timp = time
  }
	  
	   member.send("You were banned from " + message.guild).then(
        setTimeout(() => {
          member.ban()
        }, 500))
		
	  message.channel.send(vemoji + " **" + member.user.tag + "** was banned successfully by **" + message.author.tag + "**.")
	  
    let mod = new Discord.RichEmbed()
    .setAuthor("Ban | " + message.guild, member.user.avatarURL)
	.addField("User", member.user.username, true)
	.addField("Time", timp, true)
	.addField("Reason", reason, true)
	.setFooter("Banned by " + message.author.username)
    .setTimestamp()
    .setColor(0x070707)
    message.channel.send(mod)
	
if(time > 0){
    setTimeout(function() {
  message.guild.unban(member);
    },ms(time))
}
	
  };
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'COX.',
  usage: 'search <words>'
};
	