/*CMD
  command: /fqt
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

Bot.editMessage("❓When did the work began\n\n• CW started 2 years ago with the aim of making information easier for Catholics.\n• Started with v6 (version 6) bot. today it has become a secured bot with its own server.\n• We have now upgraded the site to v7 (version 7) and is now providing full service at two addresses: \n @catholicsbot and  @catholicwebot.\n• Our door is open to anyone who wants to help us. Talk to the administrators right here in Bot.",msg)&Bot.editInlineKeyboard(b,msg)
