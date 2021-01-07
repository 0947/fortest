/*CMD
  command: /fqg
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("msgid");

var b =[
[{title:"Go Back",command:"/fq"}]]

Bot.editMessage("❓What the whole service looks like\n\n• The site generally contains important informations.\n• It is a well-researched and well-documented source of information.\n• The bot is designed to operate 24 hours per day. You can use it at any time.\n•We always track the site and make sure there are no errors.",msg)&Bot.editInlineKeyboard(b,msg)
