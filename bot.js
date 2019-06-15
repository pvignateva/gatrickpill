//important header
const Discord = require('discord.js');
const client = new Discord.Client();

//var

//randomizer for ping
function randomswear(){
	var randomNumber = Math.round(Math.random()*2); // 0, 1 or 2
	switch(randomNumber){
		case 0: return 'fuck';
		case 1: return 'shit';
		case 2: return 'asshole';
	}
}

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
	
	//ping text triggers random text
	if(message.content == "!swear"){
		message.reply(randomswear());
	}
	
  	
	
//main end brackets	
});

//important ending

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
