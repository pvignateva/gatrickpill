//important header
const Discord = require('discord.js');
const client = new Discord.Client();

//var
const acab = ["acab", "fuck the police"];
const hewwo = ["Hewwo", "hewwo", "HEWWO"];
const doyouyearn = ["you ever yearn?", "u ever yearn", "Do you ever yearn?", "do you yearn", "do u yearn"];
const haveyouyearned = ["Have you yearned?", "u yearned", "you yearned?"];

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
	
	//haveyouyearned responce
	if(haveyouyearned.some(word => message.content.includes(word))) {
    		message.channel.send("well, not recently. i've craved. constant craving. but i haven't yearned.");
	}else
	
	//sir this is mcdonalds
	if(message.content.includes("can i get uhh")) {
    		message.channel.send("sir, this is mcdonalds");
	}else
	
	//69
	if(message.content.startsWith("69")) {
		message.channel.send("nice");
  	}else
	
	//straight rights
	if(message.content.includes("straight rights")) {
		message.channel.send("straight rights to shut the fuck up!");
  	}else
		
	//vore
	if(message.content.startsWith("vore")) {
		message.reply("i will kill you and you will be dead");
  	}else
		
	//terf
	if(message.content.includes("fuck terfs")) {
		message.channel.send("fuck terfs!!");
	}else
	
	//time to oppress andy
	if(message.content.includes("to oppress andy")) {
    		message.channel.send("andy did nothing wrong, ever");
  	}else
		
	//conditoned text triggers text
		
	//andy + teeth
	if(message.content.includes("andy")) {
		if(message.content.includes("teeth")) {
			message.reply("shh");
		}
	}else 
	
	//andy + teeth
	if(message.content.includes("love")) {
		if(message.content.includes("soupbot")) {
			message.reply("god is punishing me");
		}
	}else 
				
	//text triggers random text
	
	//acab
  	if(acab.some(word => message.content.includes(word))){
		message.channel.send(randomacab());
	}else
	
	//hewwo
  	if(hewwo.some(word => message.content.includes(word))){
		message.channel.send(randomhewwo());
	}else
	
	//doyouyearn
  	if(doyouyearn.some(word => message.content.includes(word))){
		message.channel.send(randomyearn());
	}
	
	
//main end brackets	
});

//important ending

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
