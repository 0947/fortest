/*CMD
  command: /vad
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin = "350936430"

msg = "Message from: " + user.first_name +"\nID "+user.telegramid+
     "\n" + message 


Bot.sendMessageToChatWithId(
  admin, msg);

var b =[
[{title: "⏫ወደ ዋና ገፅ⏫", command:"/mych"}]]

Bot.sendInlineKeyboard(b,"👁ለአስተያየትዎ እናመሰግናለን ከታች ያለውን በተን ተጠቅመው ወደ ዋና ማውጫ ይመለሱ")
