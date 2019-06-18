//important header
const Discord = require('discord.js');
const client = new Discord.Client();

//var
const acab = ["cop", "police"];
const hewwo = ["Hewwo", "hewwo", "HEWWO"];
const doyouyearn = ["you ever yearn?", "u ever yearn", "Do you ever yearn?", "do you yearn", "do u yearn"];
const haveyouyearned = ["Have you yearned?", "u yearned", "you yearned?"];
const fuckpat = ["fuck patbot", "fuck pat", "patbot sucks", "patrick sucks", "pat sucks"];

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
	var randomNumber = Math.round(Math.random()*4); 
	switch(randomNumber){
		case 0: return '...piss? i told you i have an allergy';
		case 1: return 'cmon, we ve been over this';
		case 2: return 'knock it off, kids';
		case 3: return 'what, are you an expert in the study of pee?';
		case 4: return 'piss off';
	}
}

//randomizer for situation
function randomsituation(){
	var randomNumber = Math.round(Math.random()*1); 
	switch(randomNumber){
		case 0: return 'didnt you get my e-mail explaining the situation?';
		case 1: return 'maybe so';
	}
}

//randomizer for i m sad
function randomsad(){
	var randomNumber = Math.round(Math.random()*2); 
	switch(randomNumber){
		case 0: return 'if you peed your pants, i would pretend it just got wet from the rain';
		case 1: return 'okay, you listen up and you listen hard, bucko! the next sound you hear will be me knocking on your door. the one after that, will be me hugging you real tight';
		case 2: return 'queres?? *passes serotonin*';
		case 3: return 'you re a miracle, or it s just al the stray code that makes me hallucinate';
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
	
	//straight rights
	if(message.content.includes("straight rights")) {
		message.channel.send("straight rights to shut the fuck up!");
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
		
	//i have bad news	
	if(message.content.includes ("bad news")) {
		if(message.content.includes("have")) {
			message.channel.send("is it the news that we suck?");
		}
	}else
	
	//andy + teeth
	if(message.content.includes("andy")) {
		if(message.content.includes("teeth")) {
			message.reply("shh");
		}
	}else 
		
	//ugly
	if(message.content.includes("i")) {
		if(message.content.includes("ugly")) {
			message.reply("but maybe everyone’s a little bit ugly. yeah, maybe we’re all just ugly, dying sacks of shit, and maybe all it’ll take is one person to just be okay with that, and then the whole world will be dancing and singing and farting, and everyone will feel a little bit less alone.");
		}
	}else
	
	//situation1
	if(message.content.includes("wait")) {
		if(message.content.includes("?")) {
			message.channel.send(randomsituation());
		}
	}else 
		
	//situation2
	if(message.content.includes("we")) {
		if(message.content.includes("?")) {
			message.channel.send(randomsituation());
		}
	}else 
		
	//i m sad
	if(message.content.includes("i")) {
		if(message.content.includes("sad")) {
			message.channel.send(randomsad());
		}
	}else 
		
	//text triggers random text
		
	//!swear ping
  	if(message.content.includes("!swear")){
        	message.channel.send(randomswear());
	}else
		
	//bread
	if(message.content.includes("bread makes you fat")){
        	message.channel.send("BREAD MAKES YOU *FAT*??!!?!??!?");
	}else
	
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
	
	//fuck pat
	if(fuckpat.some(word => message.content.includes(word))){
		message.channel.send("This message has been left intentionally blank.");
  	}
	
//main end brackets	
});

//important ending

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
