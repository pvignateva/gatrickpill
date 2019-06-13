//important header
const Discord = require('discord.js');
const client = new Discord.Client();

//var
const munch = ["i wanna m", "I WANNA M", "i want to m", "I WANT TO M", "i waant to m", "i waaant to m", "I WAANT TO M", "I WAAANT TO M", "I WANNAA M", "i wannaa m", "i wannaaa m", "I WANNAAA M"];
const uwu = ["uwu", "wuv", "patbot pwease", "patbot ily", "ily patbot"];
const games = ["sekiro", "SEKIRO", "bloodborne", "blood borne", "BLOODBORNE"];
const doom = ["DOOM", "doom"];
const kink = ["kink", "fetish"];
//console reply
client.on("ready", () => {
  console.log("sir, yes sir!!");
});

//main
client.on("message", (message) => {
	if (message.author.bot) return;
	//reply to trigger text with text
	//hewwo - hewwo? hewwoo-o
	if(message.content.startsWith("hewwo")) {
    message.channel.send( "H….hewwo? (;•́︿•̀ ;) Is anybody out here? (　•́ ‸•̀｀) Hewwo??? Hewwo?!?!?  Σ ( •́△•̀|||)" );
  }else
	  if(message.content.startsWith("HEWWO")) {
    message.channel.send( "Hewwo…… H-hewwo? (;•́︿•̀ ;)…………… Hewwo ( ͡° ͜ʖ ͡°)" );
  }else
	  if(message.content.includes("stummy huwt")) {
    message.channel.send( " stummy huwt! stummy huwt! i got a bad tummy mistew cybewpunk! i got go sweepy now!" );
  }else
	// 69 - nice
	if(message.content.includes("69")) {
	message.channel.send("nice");
  }else
	  if(message.content.includes("420")) {
	message.channel.send("there s no weed in soviet union...");
  }else
	  if(message.content.includes("terf")) {
	message.channel.send("fuck terfs");
  }else
	  if(message.content.includes("piss")) {
	message.channel.send("...piss? no, knock it off, kids. i have an allergy");
  }else
	 if(message.content.startsWith("its,")) {
    message.channel.send("its, soup");
  }else
	 if(message.content.includes(",,,,,")) {
	message.channel.send("its, soup");
  }else
	
	 //2 conditions
	if(message.content.includes ("is")) {
		if(message.content.includes ("good?")) {
		message.channel.send("boyp howduy");
	}}else  
		if( kink.some(word => message.content.includes(word)) ) {
	message.channel.send("nasty");
}else
	//reply with emoji

	//validation
	if(message.content.includes ("validation")) {
		if(message.content.includes ("please")) {
		message.react("586593863200931890");
	}}else 	
	//opression
	if(message.content.includes ("oppress andy")) {
	message.react("586577717990916097");
	}else
	if(message.content.includes ("press f")) {
	message.react("588531577072386049");
	}else
	if( uwu.some(word => message.content.includes(word)) ) {
	message.react("586716182036348928");
}else
	if( games.some(word => message.content.includes(word)) ) {
	message.react("586547282195775490");
}else
	if( doom.some(word => message.content.includes(word)) ) {
	message.react("586620099134488605");
}else
		
	//munch squad
	if( munch.some(word => message.content.includes(word)) ) {
	message.channel.send("SQUAD!!");
}
		
});
//important ending

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
