/*CMD
  command: /akkd
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
[{title:"ተመለስ",command:"/akw"}]
]

Bot.editMessage("🤷‍♂የሐዋርያ ዓይነተኛ መታወቂያው ቅዳሴን መውደድ ነው፡፡\n👉ጆሴማርያ ኤስክሪቫ",msg)&Bot.editInlineKeyboard(b,msg)
