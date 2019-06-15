//important header
const Discord = require('discord.js');
const client = new Discord.Client();

//var
const acab = ["cop", "police"];
const hewwo = ["Hewwo", "hewwo", "HEWWO"];
const doyouyearn = ["you ever yearn?", "u ever yearn", "Do you ever yearn?"];
const haveyouyearned = ["Have you yearned?", "u yearned", "you yearned?"];

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

//randomizer for hewwo
function randomhewwo(){
	var randomNumber = Math.round(Math.random()*3); 
	switch(randomNumber){
		case 0: return 'H….hewwo? (;•́︿•̀ ;) Is anybody out here? (　•́ ‸•̀｀) Hewwo??? Hewwo?!?!?  Σ ( •́△•̀|||) )';
		case 1: return 'Hewwo…… H-hewwo? (;•́︿•̀ ;)…………… Hewwo ( ͡° ͜ʖ ͡°)';
		case 2: return 'Hewwo ( ͡° ͜ʖ ͡°)';
		case 3: return 'H….hewwo?';
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

//randomizer for doyouyearn
function randomyearn(){
	var randomNumber = Math.round(Math.random()*2); 
	switch(randomNumber){
		case 0: return 'i yearn.';
		case 1: return 'oh, yes. yes, i yearn. often i sit... and yearn';
		case 2: return 'oh, yes. yes, i yearn. often i sit... and yearn. have you yearned?';
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
	
	//haveyouyearned responce
	if((haveyouyearned.some(word => message.content.includes(word))) {
    		message.channel.send("well, not recently. i've craved. constant craving. but i haven't yearned.");
	}
	
	//text triggers random text
	
	//!swear ping
	if(message.content.includes("!swear")){
		message.channel.send(randomswear());
	}
	
	//acab
  	if(acab.some(word => message.content.includes(word))){
		message.channel.send(randomacab());
	}
	
	//hewwo
  	if(hewwo.some(word => message.content.includes(word))){
		message.channel.send(randomhewwo());
	}
	
	//doyouyearn
  	if(doyouyearn.some(word => message.content.includes(word))){
		message.channel.send(randomyearn());
	}
	
//main end brackets	
});

//important ending

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
