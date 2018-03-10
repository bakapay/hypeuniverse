const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const prefix = "/"
const db = require('quick.db');
const bot = new Discord.Client();

require('./util/eventLoader')(client);

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

  client.on(`ready`, member => {
    client.user.setPresence({game: {name: "discord.gg/tmUp7W | /help" , type: 0}});
});

client.on("ready", () => {
	client.user.setStatus("dnd")
});

client.on("guildCreate", guild => {
guild.createRole({
  name: "Muted",
  color: "070707",
  })
   });


client.on("guildMemberAdd", member => {
if(member.guild.id != "420589257179267074") return;
	member.guild.channels.get("420591714852667403").setName("Total Users : " + member.guild.members.size + "")
	member.guild.channels.get("420591914560258059").setName("Humans : " + member.guild.members.filter(m => !m.user.bot).size + "")
	member.guild.channels.get("420591790807187476").setName("Bots : " + member.guild.members.filter(m => m.user.bot).size + "")
	});
	
client.on("guildMemberRemove", member => {
if(member.guild.id != "420589257179267074") return;
	member.guild.channels.get("420591714852667403").setName("Total Users : " + member.guild.members.size + "")
	member.guild.channels.get("420591914560258059").setName("Humans : " + member.guild.members.filter(m => !m.user.bot).size + "")
	member.guild.channels.get("420591790807187476").setName("Bots : " + member.guild.members.filter(m => m.user.bot).size + "")
	});
	
client.on("guildMemberAdd", member => {
if(member.guild.id != "420589257179267074") return;

let roleu = member.guild.roles.find("name", "Member (★☆☆☆☆)")

member.addRole(roleu.id)
});
	
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading  ${files.length} commands. 👌`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Loading command: ${props.help.name}. 👌`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.elevation = message => {
  let permlvl = 0;
  if (message.author.id === "390155343373533195") permlvl = 4;
  return permlvl;
};


client.login("NDIwNTkzNDc2NDMwNzI1MTIx.DYA7xA.tNmmrAHfT9MViH0x5Zc-q9BzQZA");