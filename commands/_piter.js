/*CMD
  command: /piter
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b = [[{ text: "⬆️ዋና ገፅ", callback_data: "/mych"}]]

 Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxSam/5",caption:  "✍🏽ቤተክርስቲያናችንን ለምን /ሐዋርያዊት/ እንላታለን⁉️\n\nቤተክርስቲያናችንን በትክክል /ሐዋርያዊት/ የምንልበት ሁለት ምክንያቶች አሉ፡አንደኛዉ ባልተቆራረጠ ሰንሰለት ከሐዋርያት ጀምሮ በጳጳሳትና አቡናት መተካካት እስከ ዛሬ ድረስ የዘለቀች በመሆኗ ሲሆን ሁለተኛዉ ቤተክርስቲያናችን በር.ሊ.ጳጳሳት እና በአቡናት አመራር ሥር ሆና የሐዋርያትን ትምህርትና እምነት የምትኖር፤ የምታስተምርና የምትጠብቅ በመሆኗ ነዉ፡፡"
, reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
