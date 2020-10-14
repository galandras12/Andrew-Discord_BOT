const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "!";

require('log-timestamp')('ANDREW-BOT:');

client.on('ready', () => {
  console.log('BOT is RUN');
  client.channels.cache.get("ChannelID_BOTMAIN").send("Andrew BOT is `RESTARTED`");
  
 /* setInterval(function(){
client.channels.cache.get("ChannelID1").bulkDelete(100).catch(console.error);
console.log('DELETED last 100 messages in channelname!');
client.channels.cache.get("ChannelID_BOTMAIN").send("`DELETED` last 100 messages in `channelname`");
  }, 1000*60*60 ); // Hour 1
  
  setInterval(function(){
client.channels.cache.get("ChannelID2").bulkDelete(100).catch(console.error);
console.log('DELETED last 100 messages in channelname!');
client.channels.cache.get("ChannelID_BOTMAIN").send("`DELETED` last 100 messages in `channelname`");
  }, 1000*60*60 ); // Hour 1
  
  setInterval(function(){
client.channels.cache.get("ChannelID3").bulkDelete(100).catch(console.error);
console.log('DELETED last 100 messages in channelname!');
client.channels.cache.get("ChannelID_BOTMAIN").send("`DELETED` last 100 messages in `channelname`");
  }, 1000*60*60 ); // 1000 ms * 60s * 120/60min */
  
  /*client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "HIVATALos robot. Fejlesztés alatt by Gál András",  //The message shown
            type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
  
});
//OFF
*/

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

});


client.login(config.BOT_TOKEN);
