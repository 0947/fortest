/*CMD
  command: /akdl
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

Bot.editMessage("🛶🛶የምንሻገርበትን ድልድይ አንስበር!🚧🚧\nየሌሎችን በደል ይቅር የማይል ሰው ራሱ የሚሻገርበትን ድልድይ ሰባሪ ነው፤ ምክንያቱም ሁሉም ሰው ይቅርታ ያስፈልገዋልና።.\n👉🏻 ፉልተን ሺን - ሊቀ ጳጳሳት",msg)&Bot.editInlineKeyboard(b,msg)
