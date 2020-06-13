/*CMD
  command: /fd
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let ms = request.text
let  pd = request.document
let au = request.audio
let vi = request.video
let pi = request.photo[0]

let ADMIN_ID1 = "@xexgbjnsjnjudxbjjdxSam"

let admin_text ="<b> From:</b> " + '<a href="' + "tg://user?id=" + user.telegramid + '">' + user.first_name + "</a>"

let adm="<b>Message From:</b> " + '<a href="' + "tg://user?id=" + user.telegramid + '">' + user.first_name + "</a>" +"<b>\n Message:</b> <code>" + ms +"</code>"

if (ms){
Api.sendMessage({ chat_id: ADMIN_ID1, text: adm, parse_mode: "html" })
}
if (pi) {
Api.sendPhoto({ chat_id: ADMIN_ID1, photo: pi.file_id, caption:admin_text, parse_mode: "html" })
}

if (vi) {
Api.sendVideo({ chat_id: ADMIN_ID1, video: vi.file_id, caption:admin_text, parse_mode: "html" })
}
if (pd) {
Api.sendDocument({ chat_id: ADMIN_ID1, document: pd.file_id, caption:admin_text, parse_mode: "html" })
}
if(au){
Api.sendAudio({ chat_id: ADMIN_ID1, audio: au.file_id, caption:admin_text, parse_mode: "html" })
}
