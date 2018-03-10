const Discord = require('discord.js');
exports.run = (client, message, args) => {
	
let icon = "icon"
if(!message.guild.iconURL){
icon = message.author.avatarURL
} else {
icon = message.guild.iconURL
}

	const embed = new Discord.RichEmbed()
	.setAuthor(message.guild, message.guild.iconURL)
	.addField("ID", message.guild.id, true)
	.addField("Name", message.guild, true)
	.addField("Owner", message.guild.owner.user.tag, true)
	.addField("Region", message.guild.region, true)
	.addField("Channels", message.guild.channels.size, true)
	.addField("Members", message.guild.memberCount, true)
	.addField("Humans", message.guild.members.filter(m => !m.user.bot).size, true)
	.addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
	.addField("Online", message.guild.members.filter(m => m.presence.status !== 'offline').size, true)
	.addField("Roles", message.guild.roles.size, true)
	.addField("Role List", message.guild.roles.map(r => r.name).join(", "))
	.setTimestamp(message.guild.createdAt)
	.setFooter("Server Created")
	.setThumbnail(message.guild.iconURL)
    .setColor(0x070707)
	    message.channel.sendEmbed(embed)
		  };
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: 'Show information about a guild.',
  usage: 'ban [user]'
};