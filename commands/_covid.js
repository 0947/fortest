/*CMD
  command: /covid
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b = [[{ text: "⬆️ዋና ገፅ", callback_data: "/mych"}]]

 Api.sendVideo({
  chat_id: chat.chatid,
video:"https://t.me/xexgbjnsjnjudxbjjdxSam/32",caption:  "📛ሰሞንኛ ፕሮግራም ከኮቪድ ወረርሽኝ ጋር የተያያዘ", reply_markup: { inline_keyboard: b },on_result: "/msgid"})

Api.sendVideo({
  chat_id: chat.chatid,
video:"https://t.me/xexgbjnsjnjudxbjjdxSam/33",caption:  "📛ሰሞንኛ ፕሮግራም ከኮቪድ ወረርሽኝ ጋር የተያያዘ", reply_markup: { inline_keyboard: b },on_result: "/msgid"})

Api.sendVideo({
  chat_id: chat.chatid,
video:"https://t.me/xexgbjnsjnjudxbjjdxSam/34",caption:  "📛ሰሞንኛ ፕሮግራም ከኮቪድ ወረርሽኝ ጋር የተያያዘ", reply_markup: { inline_keyboard: b },on_result: "/msgid"})

Api.sendVideo({
  chat_id: chat.chatid,
video:"https://t.me/xexgbjnsjnjudxbjjdxSam/35",caption:  "📛ሰሞንኛ ፕሮግራም ከኮቪድ ወረርሽኝ ጋር የተያያዘ", reply_markup: { inline_keyboard: b },on_result: "/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
