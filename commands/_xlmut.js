/*CMD
  command: /xlmut
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("msgid");

var b =[
[{title:"ተመለስ",command:"/xedayil"}]
]

Bot.editMessage("🔹መሀሪ ኢየሱስ ሆይ ለሞቱት የዘለአለም ዕረፍት ስጣቸው -- ጌታ ሆይ በክቡር ደምህ ያዳንሃቸው የንሰሐ ቦታ ነፍሶችን እባክህ እርዳቸው -- ከጭንቅ አውጣቸው። የምዕመናን ነፍሶች በእ/ር ምሕረት በሰላም ይረፉ",msg)&Bot.editInlineKeyboard(b,msg)
