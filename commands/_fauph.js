/*CMD
  command: /fauph
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b = [[{ text: "◀️ተመለስ / BACK", callback_data: "/faustin"}]]

 Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxSam/3373",caption:  "Maria Faustyna Kowalska (born Helena Kowalska; 25 August 1905 – 5 October 1938[1]), also known as Saint Maria Faustyna Kowalska of the Blessed Sacrament and popularly spelled Faustina, was a Polish Roman Catholic nun and mystic. Her apparitions of Jesus Christ inspired the Roman Catholic devotion to the Divine Mercy and earned her the title of Secretary of Divine Mercy", reply_markup: { inline_keyboard: b },on_result: "/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
