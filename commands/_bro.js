/*CMD
  command: /bro
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!params){
Bot.runAll( {

command: "/bro ms",

for_chats: "private-chats"

} )
}

if(params=="ms"){

var message = "your text message"
var b = [
    {title: "Go to Google", url: "https://google.com"},
    {title: "command for Button1", command: "/buttons" }
];

Bot.sendInlineKeyboard(b, message);
}
