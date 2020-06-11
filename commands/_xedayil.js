/*CMD
  command: /xedayil
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
[{title:"በሰማይ የምትኖር",command:"/xescy"},{title:"ፀጋን የሞላሽ",command:"/xemol"}],
[{title:"የተስፋ ስራ",command:"/xetesf"},{title:"የሀይማኖት ስራ",command:"/haymi"}],[{title:"ወደ ቅድስት ቤተሰብ",command:"/kidfa"},{title:"የንሰሀ ስራ",command:"/nisha"}],
[{title:"የፍቅር ስራ",command:"/fklsr"}],
[{title:"ጸሎት ወደ አብ",command:"/xlab"},{title:"እንጸልይ",command:"/enxl"}],
[{title:"የሀዋርያት ፀሎተ ሀይማኖት",command:"/xehow"}],
[{title:"ወደ እመቤታችን መማጠኛ ፀሎት",command:"/merxl"}],
[{title:"በምግብ ሰአት",command:"/xlfod"},{title:"ስለ ሙታን",command:"/xlmut"}],
[{title:"ስራ ሲጀመር",command:"/xlsra"},{title:"ስለ ር.ሊ.ጳጳሳት",command:"/xlfr"}],[{title:"ካሳ ለማቅረብ",command:"/xlkas"},{title:"መልካም ሞት ለማግኘት",command:"/xlmot"}],
[{title:"ስለ ህሙማን",command:"/xlhmu"}],
[{title:"ስለ መንገደኞች",command:"/xlrod"},{title:"ወደ መንፈስ ቅዱስ",command:"/xlhol"}],
[{title:"ስለ ቤ/ክ ሰላም",command:"/xlch"},{title:"ስለ ቤት ቡራኬ",command:"/xlbet"}],
[{title:"ፀሎት ስለ ቤተሰብ ብራኬ",command:"/xlhow"}],
[{title:"⏪ተመለስ⏩",command:"/xelo"},{title:"⬆️ዋና ገጽ⬇️",command:"/mych"}]]

Bot.editMessage("በዚህ button በየእለቱ የሚደረጉ (የዘወትር ፀሎት) ማግኘት ይችላሉ፡፡ ከታች ያሉትን በተኖች ይጠቀሙ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
