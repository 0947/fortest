/*CMD
  command: /xlfr
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

Bot.editMessage("ስለ ርእሰ ሊቃነ ጳጳሳት አቡነ (እገሌ) \n🔹ጌታ ይጠብቃቸው ረጅም እድሜ ይስጣቸው -- በዚህ አለምም ደስታንና ሰላምን ያድላቸው በጠላቶች እጅ አይጣላቸው",msg)&Bot.editInlineKeyboard(b,msg)
