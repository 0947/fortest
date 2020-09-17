/*CMD
  command: /fqadm
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
[{title:"💬አዎን እፈልጋለሁ",command:"/admin"}],
[{title:"<-- ተመለስ",command:"/donsam"}]]

Bot.editMessage("*ለአድሚኑ መልዕክት መላክ ይፈልጋሉ❓*",msg)&Bot.editInlineKeyboard(b,msg)
