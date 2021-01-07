/*CMD
  command: /qans
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b = [[{ text: "ዙር አንድ", callback_data: "/q1"},{ text: "ዙር ሁለት", callback_data: "/t1"}],
[{ text: "ዙር ሶስት", callback_data: "/f1"},{ text: "ዙር አራት", callback_data: "/s1"}],
[{ text: "⬅️", callback_data: "/mych"}]]

 Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxSam/4578",caption:  "🎉Welcome To QA (question and answer) page.\n🌺እንኳን ወደ ጥያቄና መልስ ገፅ በደህና መጡ ከታች የሚገኙትን በተኖች ተጠቅመው ወደ ጥያቄዎች ያምሩ፡፡\n🎁እያንዳንዱ ዙር አስር ጥያቄን ይዟል፡፡", reply_markup: { inline_keyboard: b },on_result: "/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})



if(params=="dl"){
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}}
