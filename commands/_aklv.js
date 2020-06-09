/*CMD
  command: /aklv
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

Bot.editMessage("የሰውነት ሕመም በመድኃንት ልድን ይችላል፡፡ ተስፋ ለመቁረጥና ለብቸኝነት ፍቅር ፍቱን መድኃንት ነው፡፡በዚህ ዓለም ላይ ኣንድ ጉርሻ ዳቦ በማጣት የምሞቱ ብዙ ብሆኑም እውነተኛ ፍቅርንኣጦ የምሞቱ ግን እጅግ ብዙ ናቸው፡፡ ገንዘብ ሰለ ሰጠኃቸው ብቻ ልጠግቡ፣ልረኩ ወይንምደስተኛ ልሆኑ ኣይችሉም፡፡ ለሰው ልጅ ገንዘብ ብቻ በቂ ኣይደለምና፡፡ገንዘብ ልገኝ ይችላል፡፡እነሱ ግን የልብ ፍቅርህን ነው የምፈልጉት፡፡ ስለዝህ በምትሄድበት ቦታ ሁሉ ፍቅርህን ዝራ፡፡ ፍቅርህን ኣስፋፋ፡፡#mother_theresa",msg)&Bot.editInlineKeyboard(b,msg)
