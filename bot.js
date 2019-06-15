//important header
const Discord = require('discord.js');
const client = new Discord.Client();

//var

//randomizer for ping
function randomswear(){
	var randomNumber = Math.round(Math.random()*11); 
	switch(randomNumber){
		case 0: return 'fuck';
		case 1: return 'shit';
		case 2: return 'moistey bastard';
		case 3: return 'oh fuck off';
		case 4: return 'dickhead';
		case 5: return 'piss off';
		case 6: return 'you nasty asshole';
		case 7: return 'dumbass bastard';
		case 8: return 'bloody hell';
		case 9: return 'wanker';
		case 10: return 'pissless bastard boy';
		case 11: return 'get fucked';
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
		message.channel.send(randomswear());
	}
	
  	
	
//main end brackets	
});

//important ending

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
