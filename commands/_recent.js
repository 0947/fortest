/*CMD
  command: /recent
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin_text =
  "<b>S.From: "+ user.telegramid + " </b> \n" +
  '<a href="' +
  "tg://user?id=" +
  user.telegramid +
  '">' +
  user.first_name +
  "</a>" +
  " \nText: <code>" +
  message +
  " </code>"

let ADMIN = "@xexgbjnsjnjudxbjjdxSam"


  Api.sendMessage({
    chat_id: ADMIN,
    text: admin_text,
    parse_mode: "html"
  })
