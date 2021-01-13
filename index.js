const Discord = require("discord.js");
const config = require("./config.json");
const mailauth = require("./authmail.json");
const notifier = require('mail-notifier');
const client = new Discord.Client();
const prefix = "!";
var cron = require('node-cron');
require('console-inject');
const clearchannelid = ['ChannelID1', 'ChannelID2', 'ChannelID3']; //Use developer mode in Discord app & add your channel ID
const msgchannelid = ['MessageChannelID1', 'MessageChannelID2', 'MessageChannelID3', 'MessageChannelID4', 'MessageChannelID5', 'MessageChannelID6', 'MessageChannelID7', 'MessageChannelID8']; //All channel id message send 
const channelbotmain = ['Channel_BOTMAIN_ID']; //your Bot main channel id here (not tested)

client.on('ready', () => {
  console.log('BOT is RUN');
  client.channels.cache.get(channelbotmain).send("Andrew BOT is `RESTARTED`");
	
  client.user.setStatus('dnd')
  //Status: online, idle, invisible, dnd
	
const imap = {
	user: mailauth.emailusername,
	password: mailauth.emailpassword,
	host: 'imap.gmail.com',
	port: 993,
	tls: true,
	tlsOptions: { rejectUnauthorized: false },
	box: mailauth.emailbox,
	markSeen: true,
  }
	
const n = notifier(imap);
n.on('end', () => n.start()) // session closed
	.on('mail', mail => client.channels.cache.get(channelbotmain).send(mail.subject))
	.start(); //Forever RUN 

cron.schedule('00 17 * * 3', () => {
client.user.setActivity("WORK END soon START", {
  type: "WATCHING",
  url: "https://galandras.com"
});
});

cron.schedule('0 15 * * 1,2,4', () => {
client.user.setActivity("WORK END soon START", {
  type: "WATCHING",
  url: "https://galandras.com"
});
});

cron.schedule('35 13 * * 5', () => {
client.user.setActivity("WORK END soon START", {
  type: "WATCHING",
  url: "https://galandras.com"
});
});

var facts = ['Random text 1', 'Random 2 text', 'Random 3 text message']
setInterval(function() {
  var fact = Math.floor(Math.random() * facts.length)
  client.user.setActivity(facts[fact], {
  type: "WATCHING",
  url: "https://galandras.com"
}); // Every hour
}, 60*60*1000)

cron.schedule('0 14 * * 5', () => {
   clearchannelid.forEach(element => { 
		client.channels.cache.get(element).bulkDelete(100).catch(console.error);
		}); 
		console.log('DELETED last 100 messages in `Channel3!`, `Channel2!`, `Channel1!`');
		client.channels.cache.get(channelbotmain).send("WORK END RUTIN: \n`DELETED` last 100 messages in `Channel3!`, `Channel2!`, `Channel1!`");
});

	cron.schedule('0 16 * * 1,2,4', () => {
		clearchannelid.forEach(element => { 
		client.channels.cache.get(element).bulkDelete(100).catch(console.error);
		}); 
		console.log('DELETED last 100 messages in `Channel3!`, `Channel2!`, `Channel1!`');
		client.channels.cache.get(channelbotmain).send("WORK END RUTIN: \n`DELETED` last 100 messages in `Channel3!`, `Channel2!`, `Channel1!`");
});

cron.schedule('00 18 * * 3', () => {
    clearchannelid.forEach(element => { 
		client.channels.cache.get(element).bulkDelete(100).catch(console.error);
		}); 
		console.log('DELETED last 100 messages in `Channel3!`, `Channel2!`, `Channel1!`');
		client.channels.cache.get(channelbotmain).send("WORK END RUTIN: \n`DELETED` last 100 messages in `Channel3!`, `Channel2!`, `Channel1!`");
});

cron.schedule('00 12 * * 1,2,3,4,5', () => {
    clearchannelid.forEach(element => { 
		client.channels.cache.get(element).bulkDelete(100).catch(console.error);
		}); 
		console.log('DELETED last 100 messages in `Channel3!`, `Channel2!`, `Channel1!`');
		client.channels.cache.get(channelbotmain).send("WORK END RUTIN: \n`DELETED` last 100 messages in `Channel3!`, `Channel2!`, `Channel1!`");

  });

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! Az üzenet késleltetése: ${timeTaken}ms.`);
  }   
  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`az összege: ${sum}!`);
  }
	
  else if (command === "kocka") {
    var response = [Math.floor(Math.random() * ((100 - 1) + 1) + 1)];
    message.channel.send("Ez most... " + response + "!").then().catch(console.error);
  }
  
else if (command === "dela") {
	client.channels.cache.get("ChannelID1").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Channnel2!');
	client.channels.cache.get(channelbotmain).send("`DELETED` last 100 messages in `Channel1`");
}
	
else if (command === "delb") {
	client.channels.cache.get("ChannelID2").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Channel2!');
	client.channels.cache.get(channelbotmain).send("`DELETED` last 100 messages in `Channel2`");
}

else if (command === "delc") {
	client.channels.cache.get("ChannelID3").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Channel3!');
	client.channels.cache.get(channelbotmain).send("`DELETED` last 100 messages in `Channel3!`");
}

 else if (command === "delall") {
	
	clearchannelid.forEach(element => { 
	client.channels.cache.get(element).bulkDelete(100).catch(console.error);
		}); 
	console.log('DELETED last 100 messages in `Channel3!`, `Channel2!`, `Channel1!`');
	client.channels.cache.get(channelbotmain).send("WORK END RUTIN: \n`DELETED` last 100 messages in `Channel3!`, `Channel2!`, `Channel1!`");
}
else if (command === "xmasmsg") {
	msgchannelid.forEach(element => { 
	client.channels.cache.get(element).send("Xmas here! Have a great day!"); });  //your message add here
	
	else if (command === "newyearmsg") {
	hivataluzenetall.forEach(element => { 
	client.channels.cache.get(element).send("Happy new year!"); }); //your message add here
}

else if (command === "help") {
message.reply("Adding soon");
} //HELP command update soon

else if (command === "delhelp") {
		message.reply("Adding soon");
}

else if (command === "wstat") {
const randommessages = ['Watch status 1','Watch status 2','Watch status 3','Watch status 4','Watch status 5']
const randomMessage = randommessages[Math.floor(Math.random() * randommessages.length)];
client.user.setActivity(randomMessage, {
  type: "WATCHING",
  url: "https://galandras.com"
});
}

else if (command === "lstat") {
const randommessages = ['listening stat 1', 'listening stat 2', 'listening stat 3', 'listening stat 4', 'listening stat 5']
const randomMessage = randommessages[Math.floor(Math.random() * randommessages.length)];
client.user.setActivity(randomMessage, {
  type: "LISTENING",
  url: "https://galandras.com"
});
}

else if (command === "pstat") {
const randommessages = ['Playing stat 1', 'Playing 2 text', 'Playing 3 stat text message']
const randomMessage = randommessages[Math.floor(Math.random() * randommessages.length)];
client.user.setActivity(randomMessage, {
  type: "PLAYING",
  url: "https://galandras.com"
});
}

});


client.login(config.BOT_TOKEN);
