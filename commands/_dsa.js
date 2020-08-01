/*CMD
  command: /dsa
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
let vo = request.voice

let ADMIN_ID1 = "@xexgbjnsjnjudxbjjdxSam"

let admin_text =request.caption+"\n\n----------------------------------------------------------------------\n<b> From:</b> " + '<a href="' + "tg://user?id=" + user.telegramid + '">' + user.first_name + "</a>\n 🆔 :"+user.telegramid

let adm="<b>Message From:</b> " + '<a href="' + "tg://user?id=" + user.telegramid + '">' + user.first_name + "</a>\n🆔 :"+user.telegramid +"<b>\n Message:</b> <code>" + ms +"</code>"

if (ms){
Api.sendMessage({ chat_id: ADMIN_ID1, text: adm, parse_mode: "html" })
}
if (request.photo[0]) {
Api.sendPhoto({ chat_id: ADMIN_ID1, photo: request.photo[0].file_id, caption:admin_text, parse_mode: "html" })
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
if (vo) {
Api.sendVoice({ chat_id: ADMIN_ID1, voice: vo.file_id, caption:admin_text, parse_mode: "html" })
}
