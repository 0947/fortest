/*CMD
  command: /xlkas
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
[{title:"ተመለስ",command:"/xedayil"}]
]

Bot.editMessage("🔹እጅግ የተወደድክ ኢየሱስ ሆይ ወሮታዬን ለመግለጥና ታማኝነቴን በማጉደሌ ላንተ ካሳ ለማቅረብ ፈልጌ እኔ ልቤን እሰጥሀለሁ -- ሰውነቴን በሙሉ ላንተ አቀርባለሁ -- በፀጋህ እየረዳኸኝ ዳግመኛ አልበድልህም ብዬ ቁርጥ ፈቃድ አድርጌአለሁ።",msg)&Bot.editInlineKeyboard(b,msg)
