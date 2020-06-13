/*CMD
  command: /admin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*⚠️አሁን ከዴቬሎፐሩ በቀጥታ መስመር ላይ ኖት*
•መናገር የሚፈልጉትን አስተያየት ወይም ቅሬታንም መጻፍ ይችላሉ፡፡

❗️በግል ለማናገር የምትፈልጉ @barklgn ነኝ፡፡

🔻አስተያየትዎን አሁን ይፃፉ
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



Bot.sendInlineKeyboard(
  [
  { title: "✅Back to home", command: "/mych"}], 
"✔️*መልእክትዎ ለዴቬሎፐሩ በትክክል ተልኳል፡፡ ለአስተያየትዎ እናመሰግናለን፡፡\n\n❗️ከታች ያለውን በተን ተጠቅመው ወደ ዋና ገጽ ይመለሱ፡*",{on_result:"/msgid"})

let msgs=User.getProperty("msgid")

Api.deleteMessage({chat_id:chat.chatid,message_id:msgs})

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
