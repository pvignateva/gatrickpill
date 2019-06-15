//important header
const Discord = require('discord.js');
const client = new Discord.Client();

//var
const acab = ["cop", "police"];

//randomizer for ping
function randomswear(){
	var randomNumber = Math.round(Math.random()*10); 
	switch(randomNumber){
		case 0: return 'fuck';
		case 1: return '1-800-eat-shit';
		case 2: return 'moistey bastard boy';
		case 3: return 'oh fuck off';
		case 4: return 'dickhead';
		case 5: return 'piss off';
		case 6: return 'heck';
		case 7: return 'bloody hell';
		case 8: return 'wanker';
		case 9: return 'you absolute fool';
		case 10: return 'get fucked';
	}
}

//randomizer for acab
function randomacab(){
	var randomNumber = Math.round(Math.random()*3); 
	switch(randomNumber){
		case 0: return 'all cops are bastards';
		case 1: return 'acab';
		case 2: return 'fuck cops!';
		case 3: return 'fuck blue lives';
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
	
	//text triggers text
	
	//!patbot ping
	if(message.content.includes("!patbot")) {
    		message.channel.send("patbot dreams of electric sheep");
	}
	
	//text triggers random text
	
	//!swear ping
	if(message.content.includes("!swear")){
		message.channel.send(randomswear());
	}
	
	//acab ping
  	if(acab.some(word => message.content.includes(word))){
		message.channel.send(randomacab());
	}
	
//main end brackets	
});

//important ending

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
