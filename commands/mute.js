const ms = require("ms");
const Discord = require('discord.js');
exports.run = (client, message, args) => {
let xemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHX")
let vemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHV")
let mr = message.guild.roles.find("name", "Muted")
if (!mr) return message.channel.send(xemoji + " The **Muted** role does not exist.")
if(!message.guild.member(message.author.id).hasPermission('MUTE_MEMBERS')) return message.channel.send(xemoji + " You don't have the correct permission.")
let member = message.mentions.members.first();
const k = new Discord.RichEmbed()
.setAuthor("Command: /mute", client.user.avatarURL)
.setDescription("**Description:** Mute a member, optional time limit\n**Usage:** /mute [user] [limit] [reason]\n**Example:** /mute <@419132332407128064> 10m Why not?!")
.setFooter("Requested by " + message.author.username)
.setColor(0x070707)


if (!member)
return message.channel.sendEmbed(k)
if (member.id === message.author.id) return message.channel.send(xemoji + " You cannot mute yourself, baka!")
if(!member.kickable) return message.channel.send(xemoji + " I'm sorry, but i cannot mute this member.")
let r = message.content.split(" ").slice(2)
let reason = "reason"
if (!r) {
  reason = xemoji + " No reason provided."
} else {
  reason = r
}
let time = args[1]
if (!time) return message.channel.sendEmbed(k)

message.channel.send(vemoji + " **" + member.user.tag + "** was muted successfully by **" + message.author.tag + "**.")

if(!reason){
member.send("You were muted in " + message.guild + ", no reason provided.")
} else {
member.send("You were muted in " + message.guild + ", " + reason)} 

    member.addRole(mr.id)
  
    let mod = new Discord.RichEmbed()
    .setAuthor("Mute | " + message.guild, member.user.avatarURL)
	.addField("User", member.user.username, true)
	.addField("Time", time, true)
	.addField("Reason", reason, true)
	.setFooter("Muted by " + message.author.username)
    .setTimestamp()
    .setColor(0x070707)
  message.channel.sendEmbed(mod)

  setTimeout(function() {
    member.removeRole(mr.id)
  },ms(time))

};
	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'mute',
  description: 'COX.',
  usage: 'search <words>'
};