const weather = require('weather-js');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
let xemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHX")
let vemoji = client.guilds.get("418461344707248129").emojis.find("name", "CHV")
const k = new Discord.RichEmbed()
.setAuthor("Command: /weather", client.user.avatarURL)
.setDescription("**Description:** Shows the weather in a certain location\n**Usage:** /weather [location]\n**Example:** /weather New York")
.setFooter("Requested by " + message.author.username)
.setColor(0x070707)

if(!args.join(" ")) return message.channel.send(k)

    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
	if (err) message.channel.send(err);
	
	if (result.length === 0) {
    message.channel.send(k)
    return;
    }
	
    var current = result[0].current;
    var location = result[0].location;

	const wht = new Discord.RichEmbed()
.setAuthor(`Weather for ${current.observationpoint}`, current.imageUrl)
.setThumbnail(current.imageUrl)
.setColor(0x070707)
.addField('Timezone',`UTC${location.timezone}`, true)
.addField('Degree Type',location.degreetype, true)
.addField('Temperature',`${current.temperature} Degrees`, true)
.addField('Feels Like', `${current.feelslike} Degrees`, true)
.addField('Winds',current.winddisplay, true)
.addField('Humidity', `${current.humidity}%`, true) 
.setFooter("Sky - " + current.skytext)


message.channel.send(wht)
	});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'weather',
  description: 'COX.',
  usage: 'search <words>'
};