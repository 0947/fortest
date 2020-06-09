/*CMD
  command: /broadcast 
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

command: "/broadcast ms",

for_chats: "private-chats"

} )
}

if(params=="ms"){

var message = "your text message"
var buttons = [
    {title: "Go to Google", url: "https://google.com"},
    {title: "command for Button1", command: "/touch Button1" }
];

Bot.sendInlineKeyboard(buttons, message);
}
