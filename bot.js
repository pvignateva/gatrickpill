//important header
const Discord = require('discord.js');
const client = new Discord.Client();

//var

//console reply
client.on("ready", () => {
  console.log("sir, yes sir!!");
});

//main
client.on("message", (message) => {
	
	//turn off replying to bots
	if (message.author.bot) return;
	
	//ping text triggers text
	if(message.content.includes("!patbot")) {
    		message.channel.send("patbot dreams of electric sheep");
  	}
	
//main end brackets	
});

//important ending

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
