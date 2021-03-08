/*CMD
  command: /tr5
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

Bot.editMessage("❤️ሰላማችን❤️\n\nከጥንት ጀምረን ባንድነት \nእንኖር ነበረ በፍቅር /2/ \nዛሬ ግን ያ ሁሉም ተረሳ \nቃኤል በአቤል ላይ ተነሳ \nሳኦል በዳዊት ላይ ተነሳ \nኤሳው በያቆብ ላይ ተነሳ \nምድራችንም ሰላም አጣች (2)\n \nሰላም /4/ ስጠን እግዚአብሔር ምህረት \nሰላም /4/ ስጠን እግዚአብሔር አንድነት\n \nአንተ ሁነን ሰላማችን \nፍቅር ስጠን እግዚአብሔር /2/ \nጦርነቱ ዋይታው \nያለፈውን ይብቃን \nጌታ /2/ \nአንተ ሁነን ሰላማችን \nፍቅር ስጠን እግዚአብሔር \nአንተ ሁነን ሰላማችን \nፍቅርን ስጠን አንድነት (2) \nአንተ ሁነን ሰላማችን",msg)&Bot.editInlineKeyboard(b,msg)
