/*CMD
  command: /xetesf
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

Bot.editMessage("🔹አምላኬ ሆይ ተስፋ የሰጠኸው ቃልህ እውነተኛ ነውና ስለ ኢየሱስ ክርስቶስ ትሩፋት የዘለአለምን ህይወት እንደምትሰጠኝና ወደዚያውም ለመድረስ ፀጋህን እንደምታድለኝ ተስፋ አደርጋለሁ",msg)&Bot.editInlineKeyboard(b,msg)
