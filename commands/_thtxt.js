/*CMD
  command: /thtxt
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
[{title:"⚠️ከጋብቻ በፊት",command:"/thwz"},{title:"⚠️ወሊድ መቆጣጠሪያ",command:"/thwld"}],
[{title:"⚠️ሴተኛ አዳሪ",command:"/thset"},{title:"⚠️ማስተርቤሽን",command:"/thmax"}],
[{title:"✅ተመለስ",command:"/theolo"},{title:"⬆️ዋና ገጽ",command:"/menu"}]]

Bot.editMessage("በዚህ button የtheology ትምህርት በጽሁፍ ያገኛሉ፡፡ ከታች ያሉ በተኖች ይጠቀሙ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
