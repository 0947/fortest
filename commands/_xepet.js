/*CMD
  command: /xepet
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
[{title:"ተመለስ",command:"/xekidus"}]
]

Bot.editMessage("❤️ ፀሎት ወደ ቅዱስ ጴጥሮስ ❤️\n\nቅዱስ ጴጥሮስ ሆይ በሀይማኖትህና በፍቅርህም ምክንያት ጌታ እየሱስ የሀዋርያት የበላይ ሹምና የቤ/ክ አለቃ እንድትሆን አድርጎሀል -- እባክህ በሀይማኖታችን ጠንካሮች እንድንሆን አድርገን -- ከቅድስት ቤ/ክ እንዳንለይ ሃይማኖትህና ስልጣንህን ለወረሱት የመላዋ ቤ/ክ ጠቅላይ አለቃ ሆነው ለተሾሙት ለርዕሰ ሊቃነ ጳጳሳት ታዛዦች እንድንሆን እርዳን። --አሜን",msg)&Bot.editInlineKeyboard(b,msg)
