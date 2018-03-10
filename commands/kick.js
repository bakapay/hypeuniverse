const Discord = require('discord.js');
exports.run = (client, message, args) => {
let xemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHX")
let vemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHV")
    if(!message.guild.member(message.author.id).hasPermission('KICK_MEMBERS')) return message.channel.send(xemoji + " You don't have the correct permission.")
     let member = message.mentions.members.first();
      const k = new Discord.RichEmbed()
.setAuthor("Command: /kick", client.user.avatarURL)
.setDescription("**Description:** Kick a member\n**Usage:** /kick [user] [reason]\n**Example:** /kick <@419132332407128064> Why not?!")
.setFooter("Requested by " + message.author.username)
.setColor(0x070707)

      if (!member)
        return message.channel.sendEmbed(k);
        if (member.id === message.author.id) return message.channel.send(xemoji + " You cannot kick yourself, baka!")
        if(!member.kickable) return message.channel.send(xemoji + " I'm sorry, but i cannot kick this member.")
        let reason = "reason"
        if (!args.slice(1).join(' ')) {
          reason = xemoji + " No reason provided."
        } else {
          reason = args.slice(1).join(' ')
        } 
        member.send("You were kicked from " + message.guild).then(
        setTimeout(() => {
          member.kick(reason)
        }, 500))
		
	 message.channel.send(vemoji + " **" + member.user.tag + "** was kicked successfully by **" + message.author.tag + "**.")

    let mod = new Discord.RichEmbed()
    .setAuthor("Kick | " + message.guild, member.user.avatarURL)
	.addField("User", member.user.username, true)
	.addField("Reason", reason, true)
	.setFooter("Kicked by " + message.author.username)
    .setTimestamp()
    .setColor(0x070707)
    message.guild.channels.get("421650187555962880").send(mod)
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'COX.',
  usage: 'search <words>'
};
