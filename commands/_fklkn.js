/*CMD
  command: /fklkn
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
[{title:"ተመለስ",command:"/mztxt"}]
]

Bot.editMessage("❤️ፍቅር የማውቀው❤️ \n\nፍቅር የማውቀው ይሄ ነው\nራሱን አይወድም ጨዋ ነው \nየሚያዝን ልቡ ሚራራ \nሀዘን ላጠቃው መከራ \nራሱን ስለፍቅር ያኖረው \nለስጋው ክብር የማይኖር \nየተባረከ በእግዚአብሔር 🔈\n\n1⃣አቤት ስንት አለ በምድር ላይ \nየበደል መዓት ገኖ ሚታይ\nሰው በሰው ላይ እየጨከነ \nበችግር ስቃይ እየኮነነ\nእግዚአብሔር ይሄን ይመለከታል \nበፈጠረው ሰው እጅጉን ያዝናል /2/\n\n2⃣በረሀብ ችግር ወገን ሲጎዳ \nማነው የሚያዝን ማነው ሚረዳ \nጩኸቱን ሰምቶ የሚደርስለት \nለዚህ የበቃ ፀጋው በዝቶለት \nእሱ ነው ፃድቅ የተባረከ \nልቡ የተነካ ጌታ የረዳው  /2/\n\n3⃣ባለው እውቀት ላይ ዕውቀት ቢጨምር \nሀብቱ ቢበዛ ቢሰራ ክምር \nፍቅር ከሌለው ባያይ ወንድሙን \nታዲያ ምንድነው የቱ ነው ጥቅሙ \nእግዚአብሔር ይሄን ይመለከታል \nየሰው ክፋት በርግጥ ይጠላል /2/",msg)&Bot.editInlineKeyboard(b,msg)
