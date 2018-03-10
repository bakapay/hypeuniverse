const Discord = require('discord.js');
exports.run = (client, message, args) => {

let member = message.guild.member(message.author.id);
const millisJoined = new Date().getTime() - member.joinedAt.getTime();
const daysJoined = millisJoined / 1000 / 60 / 60 / 24;

let joinedAt1 = message.guild.member(message.author.id).joinedAt.toString().split(' ');
let finalString1 = joinedAt1[1] + "/" + joinedAt1[2] + "/" + joinedAt1[3]

let game = "game"
if(!message.author.presence.game){
 game = "None"
} else {
 game = message.author.presence.game.name
}

let nickname = "nickname"
if(!message.guild.member(message.author.id).nickname){
 nickname = "None"
} else {
 nickname = message.guild.member(message.author.id).nickname
}

let daysz = "days"
if(daysJoined.toFixed(0) === "1"){
	daysz = " Day"
} else {
    daysz = " Days"
}
	
	const authoru = new Discord.RichEmbed()
	.setAuthor(message.author.tag, message.author.avatarURL)
	.addField("ID", message.author.id, true)
	.addField("Nickname", nickname, true)
	.addField("Status", message.author.presence.status, true)
	.addField("Game", game, true)
	.addField("Joined", finalString1, true)
	.addField("Days since joining", daysJoined.toFixed(0) + daysz, true)
	.addField("Roles", message.guild.member(message.author.id).roles.map(r => r.name).join(", "))
	.setFooter("Account Created")
	.setTimestamp(message.author.createdAt)
	.setThumbnail(message.author.avatarURL)
	.setColor(0x070707)
	
if(message.mentions.users.size < 1) return message.channel.send(authoru)
	
let user1 = message.mentions.users.first();
let member2 = message.guild.member(user1.id);

let game2 = "game"
if(!user1.presence.game){
 game2 = "None"
} else {
 game2 = user1.presence.game.name
}

let nickname2 = "nickname"
if(!message.guild.member(user1.id).nickname){
 nickname2 = "None"
} else {
 nickname = message.guild.member(user1.id).nickname
}

const millisJoined2 = new Date().getTime() - member2.joinedAt.getTime();
const daysJoined2 = millisJoined / 1000 / 60 / 60 / 24;

let joinedAt2 = message.guild.member(user1.id).joinedAt.toString().split(' ');
let finalString2 = joinedAt2[1] + "/" + joinedAt2[2] + "/" + joinedAt2[3]

let daysz1 = "days"
if(daysJoined2.toFixed(0) === "1"){
	daysz1 = " Day"
} else {
    daysz1 = " Days"
}

	const useru = new Discord.RichEmbed()
	.setAuthor(user1.tag, user1.avatarURL)
	.addField("ID", user1.id, true)
	.addField("Nickname", nickname2, true)
	.addField("Status", user1.presence.status, true)
	.addField("Game", game2, true)
	.addField("Joined", finalString2, true)
	.addField("Days since joining", daysJoined2.toFixed(0) + daysz1, true)
	.addField("Roles", message.guild.member(user1.id).roles.map(r => r.name).join(", "))
	.setFooter("Account Created")
	.setTimestamp(user1.createdAt)
	.setThumbnail(user1.avatarURL)
	.setColor(0x070707)
	
	
	message.channel.send(useru)
	
};
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'whois',
  description: 'Show information about a guild.',
  usage: 'ban [user]'
};