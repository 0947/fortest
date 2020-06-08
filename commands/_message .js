/*CMD
  command: /message 
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var message = "your text message"
var buttons = [
    {title: "Go to Google", url: "https://google.com"},
    {title: "Call command for Button1", command: "/touch Button1" },
    {title: "Call command for Button2", command: "/touch Button2" }
];

Bot.sendInlineKeyboard(buttons, message);
