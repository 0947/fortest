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

let id = "350936430"
let msg = "<b>New Message 🚨\n\nUser ID 🆔:</b> <code>"+user.telegramid+"</code> \n<b>By User :</b> " +'<a href="' + 'tg://user?id=' + user.telegramid + '">' + user
    .first_name + '</a>' +  " <b>\n\n MESSAGE 📨 :  </b>"+data.message+"<b>\n\nTO REPLY TO THE USER CLICK THE BUTTON BELOW</b>"

var b = [[{ text: "REPLY TO USER ➡️  "+user.first_name, callback_data: "/replaymul "+user.telegramid}]]

 Api.sendMessage({
  chat_id: id, 
text: msg ,
parse_mode: "html",
  reply_markup: { inline_keyboard: b } })

let msg = User.getProperty("msgid");

var b =[
[{title:"ተመለስ",command:"/mych"}]
]

Bot.editMessage("️👱‍♂ለአስተያየትዎ ከልብ እናመሰግናለን ደህና ይሁኑ፡፡\n\n•ወደዋና ገጽ ለመሄድ ከታች ያለውን በተን ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)


