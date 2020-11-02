const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "!";
var cron = require('node-cron');
const notifier = require('mail-notifier');
//require('log-timestamp')('ANDREW-BOT:', 'Europe/Budapest');
require('console-inject');

client.on('ready', () => {
  console.log('BOT is RUN');
  client.channels.cache.get("ChannelID_BOTMAIN").send("Andrew BOT is `RESTARTED`");
	
const imap = {
  user: 'googlebasedemail@gmail.com',
  password: 'this-is-the-google-apppassword',
  host: 'imap.gmail.com',
  port: 993,
  tls: true,
  tlsOptions: { rejectUnauthorized: false },
  box: 'Notification',
};
	
const n = notifier(imap);
n.on('end', () => n.start()) // session closed
  .on('mail', mail => client.channels.cache.get("ChannelID_BOTMAIN").send(mail.subject))
  .start();

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
   client.channels.cache.get("ChannelID3").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Channel3!');
	client.channels.cache.get("ChannelID2").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Channel2!');
	client.channels.cache.get("ChannelID1").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Channel1!');
	client.channels.cache.get("Channel_BOTMAIN").send("WORK END RUTIN: \n`DELETED` last 100 messages in `Channel3!`, `Channel2!`, `Channel1!`");
});

cron.schedule('0 16 * * 1,2,4', () => {
    client.channels.cache.get("ChannelID3").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Channel3!');
	client.channels.cache.get("ChannelID2").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Channel2!');
	client.channels.cache.get("ChannelID1").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Channel1!');
	client.channels.cache.get("Channel_BOTMAIN").send("WORK END RUTIN: \n`DELETED` last 100 messages in `Channel3!`, `Channel2!`, `Channel1!`");
});

cron.schedule('00 18 * * 3', () => {
    client.channels.cache.get("ChannelID3").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Channel3!');
	client.channels.cache.get("ChannelID2").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Channel2!');
	client.channels.cache.get("ChannelID1").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Channel1!');
	client.channels.cache.get("Channel_BOTMAIN").send("WORK END RUTIN: \n`DELETED` last 100 messages in `Channel3!`, `Channel2!`, `Channel1!`");
});

cron.schedule('00 12 * * 1,2,3,4,5', () => {
    client.channels.cache.get("ChannelID3").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Channel3!');
	client.channels.cache.get("ChannelID2").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Channel2!');
	client.channels.cache.get("ChannelID1").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Channel1!');
	client.channels.cache.get("Channel_BOTMAIN").send("12:00 - DÉLI TISZTÍTÁS RUTIN: \n`DELETED` last 100 messages in `Channel3!`, `Channel2!`, `Channel1!`");

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
  
else if (command === "dela") {
	client.channels.cache.get("ChannelID1").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Channnel2!');
	client.channels.cache.get("ChannelID_BOTMAIN").send("`DELETED` last 100 messages in `Channel1`");
}
	
else if (command === "delb") {
	client.channels.cache.get("ChannelID2").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Channel2!');
	client.channels.cache.get("ChannelID_BOTMAIN").send("`DELETED` last 100 messages in `Channel2`");
}

else if (command === "delc") {
	client.channels.cache.get("ChannelID3").bulkDelete(100).catch(console.error);
	console.log('DELETED last 100 messages in Channel3!');
	client.channels.cache.get("Channel_BOTMAIN").send("`DELETED` last 100 messages in `Channel3!`");
}

  /* else if (command === "del") {
	message.channel.bulkDelete(100);
	console.log('DEL! 100 message ACTIVATED again!');
        }, 1000*60*60 );
//OFF	
	 console.log('DEL command is active!');
 } */

else if (command === "help") {
message.reply("`használd a következő paancsokat: `\n`Válasz időt mutatja a bot és a géped között: !ping`\n`Számok gyors összeadására van: !szum`");
}
else if (command === "adhelp") {
		message.reply("`használd a következő admin paancsokat: `\n`Közlemény törlés: !delkoz`\n`Pénzügy eAdat törlése: !delpadat`\n`Adó eAdat törlése: !delaadat`");
}
	
	else if (command === "rstat") {
const randommessages = ['Random text 1', 'Random 2 text', 'Random 3 text message']
const randomMessage = randommessages[Math.floor(Math.random() * randommessages.length)];
client.user.setActivity(randomMessage, {
  type: "WATCHING",
  url: "https://mezobereny.hu"
});
}

});


client.login(config.BOT_TOKEN);
