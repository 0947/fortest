/*CMD
  command: /tr15
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
[{title:"ተመለስ",command:"/mztxt2"}]
]

Bot.editMessage("❤️ላደረክልን❤️\n\nላደረክልን ነገር ተመስገን \nስላልሆነልንም ነገር ተመስገን (2) \nእግዚአብሔር /3/ ክበር ንገስ ከፍ በል /2\n \nአይጓደልብህ ላንተ ምስጋና \nበሁኔታዎች ሁሉ ልክ ነህና \nስለሆነው ስላልሆነው \nለሚሆነውም ነገር ተመስገን /2/\n \nተመስገን ጌታ ስለስጦታ \nክበር እንልሀለን \nሁልጊዜ ጌታ (2)\n \nላደርክልን ....\n \nአለትን ስንጥቀህ ውሃን አጠጣኸን \nበምድረ በዳ አንተ መና መገብከን \nበጨለማ ውስጥ ብርሃን የሆንክልን \nአምላካችን ተመስገን /2/\n \nምስጋናችን ነህ \nባለውለታ \nተወደስ እግዚአብሔር ተመለክ ጌታ /2/",msg)&Bot.editInlineKeyboard(b,msg)
