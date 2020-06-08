/*CMD
  command: /pwd
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
[{title:"ተመለስ",command:"/popaba"}]
]

Bot.editMessage("“ማንም ሰው ሊወደን በማይችል መልኩ እግ/ሔር አባታችን ይወደናል”\n\nPope francis",msg)&Bot.editInlineKeyboard(b,msg)
