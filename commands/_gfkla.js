/*CMD
  command: /gfkla
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

Bot.editMessage("❤️ጌታ ያንተ ፍቅር❤️ \n\n1⃣ላንተ ማልገባ ወንበዴ ነበርኩኝ\nያንተ የሆነውን ሁሉ እያሳደድኩኝ\nይኸው ያንተ ሆንኩልህ የሱሴ ተረታሁ \nመንፈስህን ስታፈስ እዘምራለሁ\n\n🎧ጌታ የአንተ ፍቅር አረ አይለይም ሰው\nጌታ(ውዴ) የአንተ መውደድ\nኧረ እውነተኛ ነው\n\n📌እውነተኛ አሄሄ  የልብ ጓደኛ\n     እውነተኛ አሄሄ ልዩ ሚስጢረኛ\n\n2⃣ሲባል እሰማ ነበር በልጅነቴ\nአሁንም አየሁኝ በወጣትነቴ\nፍቅርህ ጥልቅ ነው አይደረስ ዳሩ\nይባል የኖረው ከያኔ ጀምሮ\n\n 3⃣ድንቅ ነህ እያልኩ ላመስግንህ\n ይክበብህ ይሙላልህ \nምስጋና በቤትህ\nባለህበት ስፍራ \nበላይ በዙፋንህ\nክበር አንተ ክበር \nእውነተኛ አምላክ ነህ",msg)&Bot.editInlineKeyboard(b,msg)
