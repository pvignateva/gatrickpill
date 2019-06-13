//important header
const Discord = require('discord.js');
const client = new Discord.Client();

//console reply
client.on("ready", () => {
  console.log("sir, yes sir!!");
});

//main
client.on("message", (message) => {
	//reply to trigger text with text
	//hewwo - hewwo? hewwoo-o
	if(message.content.startsWith("hewwo")) {
    message.channel.send("H…hewwo? Is anybody out here? Hewwo??? Hewwo?!?!?");
  }else
	// 69 - nice
	if(message.content.includes("69")) {
	message.channel.send("nice");
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
	}
		
});
//important ending

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
