/*CMD
  command: /mztxt
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("msgid");

var b=[
[{title:"እወድሀለሁ",command:"/jomz"},{title:"ፍቅር የኛ ነህ", command :"/fklmlz"}],
[{title:"በፍቅር አስተሳስረን",command:"/bfka"},{title:"በድል በድል", command :"/bedl"}],
[{title:"አልፈራም",command:"/alef"},{title:"እልል እልል", command :"/elll"}],
[{title:"እ/ር ካልሰራ",command:"/erkl"},{title:"አመስግኚው", command :"/amsg"}],
[{title:"ጌታ ያንተ ፍቅር",command:"/gfkla"},{title:"እመቤቴ", command :"/txtem"}],
[{title:"አማኑኤል",command:"/emmn"},{title:"ላላይ ሌላ", command :"/laly"}],
[{title:"አልለወጥ ያለኝ",command:"/allel"},{title:"ይበልሽ ደስ", command :"/yblds"}],
[{title:"በዘለአለም ፍቅርህ",command:"/bzlfk"}],
[{title:"ላገልግለው",command:"/lglgl"},{title:"ለኔ ቅርብ ነው", command :"/krbe"}],
[{title:"እየሱሴ",command:"/eyuwd"},{title:"የሚረዳኝ", command :"/ymir"}],
[{title:"ምስጋናችን",command:"/misgn"},{title:"ወደ ፂዮን", command :"/wdxiy"}],
[{title:"አህዛብ ለአምላክ",command:"/ahizb"},{title:"ደስታ ለአለም", command :"/dstlm"}],
[{title:"ገሩ ልብህ",command:"/grulb"},{title:"እ/ር ካለ", command :"/erkal"}],
[{title:"ፍቅር የማውቀው",command:"/fklkn"},{title:"መድሀኒታችን", command :"/mdhnt"}],
[{title:"የዘለአለም አምላክ",command:"/zlaml"},{title:"ማረፍያዬ", command :"/marf"}],
[{title:"እወድሀለሁ ጌታ",command:"/wdhlg"},{title:"እንዳንተ የሆነልኝ", command :"/endth"}],
[{title:"ተጠመቀልን",command:"/tetmk"},{title:"አመልክሀለሁ", command :"/amlk"}],
[{title:"ጎልጎልታ ወጣ", command :"/golgol"},{title:"አንድ አድርጎናል",command:"/onewe"}],
[{title:"የሰማይ የምድር ንጉስ",command:"/zsmng"}],
[{title:"⏭ለመመለስ",command:"/mzmu"},{title:" ↕️ዋና ገፅ ", command :"/mych"}]]

Bot.editMessage("በዚህ ገፅ የካቶሊካዊት ቤተክርስቲያን መዝሙሮች በፅሁፍ ተቀምጠዋል፡፡ ከታች ያሉትን በተኖች ይጠቀሙ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
