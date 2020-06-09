/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/


Bot.sendInlineKeyboard(
  [
  { title: "↪️ወደ ዋና ገፅ↩️", command: "/start"}], 
"ውድ  "+ user.first_name+"   እባኮትን በተኖችን ብቻ ይጠቀሙ፡፡ ወደ ዋና ገፅ ለመሄድ ከታች ያለውን በተን ይጫኑት፡፡",{on_result:"/msgid"})
let admin_text ="<b>S.From:</b> \n" +'<a href="' +"tg://user?id=" + user.telegramid +'">' + user.first_name + "</a>" +" \nText: <code>" + message + " </code>"
let ADMIN = "@xexgbjnsjnjudxbjjdxSam"
  Api.sendMessage({ chat_id: ADMIN, text: admin_text, parse_mode: "html"})
