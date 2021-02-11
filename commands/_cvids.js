/*CMD
  command: /cvids
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
[{title:"የቁርባን ተአምራት",command:"/kur88"}],
[{title:"ጥንቃቄ ለቅ.ቁርባን",command:"/kur99"}],
[{title:"ከsocial media የተገኙ ቪዲዮ",command:"/cvidsm"}],
[{title:"<--",command:"/mych"}]
]

Bot.editMessage("ይህ የቪዲዮ ገጽ ነው ከታች ያሉትን በተኖች ይጠቀሙ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
