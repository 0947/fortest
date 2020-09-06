/*CMD
  command: /faustin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b = [[{ text: "🗯መጽሀፉን ለማግኘት", callback_data: "/faup"}],
[{text:"<--",callback_data:"/mych"}]]

 Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxSam/3373",caption:  "✅የቅድስት ፋውስቲና ማስታወሻ በpdf መልክ ለማግኘት ከታች መፅሀፉን ለማግኘት የሚለውን ይጫኑ፡፡", reply_markup: { inline_keyboard: b },on_result: "/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
