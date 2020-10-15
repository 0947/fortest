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

var b = [[{ text: "የቅድስት ፋውስቲና ማስታወሻ", callback_data: "/faup"}],
[{ text: "የመለኮታዊ ምህረት አክሊል አደጋገም", callback_data: "/faux"}],
[{text:"<--",callback_data:"/mych"}]]

 Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxSam/3373",caption:  "✅ይህ የቅድስት ፋውስቲና የመረጃ ክፍል ነው፡፡\n•በዚህ ክፍል የቅድስት ፋውስቲና ማስታወሻ እና የመለኮታዊ ምህረት ፀሎት ከደጋገም የተሰኙ ሁለት መፅሀፍት በPDF አዘጋጅተናል ከታች ያሉትን በተን ተጠቅመው ያግኟቸው፡፡", reply_markup: { inline_keyboard: b },on_result: "/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
