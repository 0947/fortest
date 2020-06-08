/*CMD
  command: /xeber
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

Bot.editMessage("❤️ጸሎት ወደ ቅዱስ በርናርዶስ❤️\nቅዱስ አባት ሆይ!\nመላ ልጆችህን ወደ ፍጹም ፍቅር የምትጠራናየተወሰኑትን ደግሞ በቅርብ የልጅህን ፈለግይከተሉ ዘንድ የምትጋብዝ፤በቅዱስ በርናርዶስ አማላጅነት በሙላትያንተ እንዲሆኑ የመረጥካቸውን ለዓለምና ለቤተ ክርስቲያን",msg)&Bot.editInlineKeyboard(b,msg)
