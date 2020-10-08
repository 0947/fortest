/*CMD
  command: /akw
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
[{title:"የምንሻገርበት",command:"/akdl"},{title:"እድል",command:"/aked"}],
[{title:"ሰላም",command:"/aksl"},{title:"ሀሳቦች",command:"/akhs"}],
[{title:"ህይወት",command:"/akhy"},{title:"ብርሀን",command:"/akbr"}],
[{title:"ቅዳሴ",command:"/akkd"},{title:"ኢየሱስ በእኔ",command:"/akjs"}],
[{title:"✅ተመለስ",command:"/abkidz"}]
]

Bot.editMessage("ከዚህ በታች የቅዱሳን አባባል በፅሁፍ ቀርቧል፡፡ የፅሁፉን ርዕስ በመምረጥ ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
