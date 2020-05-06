/*CMD
  command: /admin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
😊እባክዎትን በዚህ ቦት ያሎትን አስተያየት አሁን ይፃፉልን

በግል ለማናገር ከፈለጉ @barklgn ነኝ

👇አሁን ይፃፉት ሀሳቡን👇

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let admin = "350936430"

msg = "Message from: " + user.first_name +"\nID "+user.telegramid+
     "\n" + message 


Bot.sendMessageToChatWithId(
  admin, msg);

var b =[
[{title: "⏫ወደ ዋና ገፅ⏫", command:"/start"}]]

Bot.sendInlineKeyboard(b,"👁ለአስተያየትዎ እናመሰግናለን ከታች ያለውን በተን ተጠቅመው ወደ ዋና ማውጫ ይመለሱ")
