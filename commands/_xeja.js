/*CMD
  command: /xeja
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

Bot.editMessage("❤️የቅድስት ጃና ጸሎት❤️ \n\nኢየሱስ ሆይ አንተ በእኔ ላይ እንዲሆን የፈቀድከውን ሁሉ ለመቀበል ላንተ ቃል እገባለሁ፡፡ ፈቃድህን እንዳውቅ ብቻ አድርገኝ፡፡ ፍጹም ውድ ኢየሱስ፤ ምሕረትህ ወሰን የሌለው እግዚአብሔር ሆይ! በልዩ ሁኔታ ደግሞ በጣም ደካማ ለሆኑት ፤ በጣም ተስፋ ለቆረጡት፤ በጣም ላረጁት በተለየ መልኩ ርኀሩኅ የነፍሳት አባት አድርገህ ራስህን በመስጠት በመለኮታዊ እጆህ የምትጠብቅ፤ በቅዱስ ልብህ ፍቅር እና ደግነት ሁልጊዜ ቅዱስ ፈቃድህን የምፈጽምበትና የምገነዘብበትን፤ ባንተ በዘላለማዊነት ያለስጋት በአፍቃሪው እቅፍህ የማርፍበትን ጸጋ እለምንሀለሁ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
