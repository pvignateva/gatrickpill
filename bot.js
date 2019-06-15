//important header
const Discord = require('discord.js');
const client = new Discord.Client();

//var
const acab = ["cop", "police"];
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

//randomizer for piss
function randompiss(){
	var randomNumber = Math.round(Math.random()*7); 
	switch(randomNumber){
		case 0: return '...piss? i told you i have an allergy';
		case 1: return 'cmon, we ve been over this';
		case 2: return 'no piss, no harm, just another false alarm';
		case 3: return 'knock it off, kids';
		case 4: return 'in this world it s piss or be pissed on';
		case 5: return 'oh, a fellow pissologist';
		case 6: return 'what, are you an expert in the study of pee?';
		case 7: return 'piss off';
	}
}

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
	
	//stummy huwt
	if(message.content.includes("stummy huwt")) {
    		message.channel.send("stummy huwt! stummy huwt! i got a bad tummy mistew cybewpunk! i got go sweepy now!");
  	}else

	//69
	if(message.content.includes("69")) {
		message.channel.send("nice");
  	}else
		
	//vore
	if(message.content.includes("vore")) {
		message.reply("i will kill you and you will be dead");
  	}else
		
	//terf
	if(message.content.includes("terf")) {
		message.channel.send("fuck terfs");
	}else
	
	//time to oppress andy
	if(message.content.includes("to oppress andy")) {
    		message.channel.send("andy did nothing wrong, ever");
  	}else
		
	//conditoned text triggers text
		
	//is _ good?	
	if(message.content.includes ("is")) {
		if(message.content.includes("good?")) {
			message.channel.send("boyp howduy");
		}
	}else
	
	//andy + teeth
	if(message.content.includes("andy")) {
		if(message.content.includes("teeth")) {
			message.channel.send("shh");
		}
	}else 
	
	//text triggers random text
		
	//!swear ping
  	if(message.content.includes("!swear")){
        	message.channel.send(randomswear());
	}else
		
	//piss
	if(message.content.includes("piss")){
        	message.channel.send("piss");
	}else
	
	//acab
  	if(acab.some(word => message.content.includes(word))){
		message.channel.send(randomacab());
	}else
	
	//hewwo
  	if(hewwo.some(word => message.content.includes(word))){
		message.channel.send(randompiss());
	}else
	
	//doyouyearn
  	if(doyouyearn.some(word => message.content.includes(word))){
		message.channel.send(randomyearn());
	}	
	
//main end brackets	
});

//important ending

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
