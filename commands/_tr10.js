/*CMD
  command: /tr10
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
[{title:"ተመለስ",command:"/mztxt2"}]
]

Bot.editMessage("❤️ቅዱስ ቁርባን❤️\n\nቅዱስ ቁርባን /2/ \nኢየሱስ ስጋና ደም \nየሚሰጥ ለአለም ሕይወት (2)\n \nየሚያድስ የሚለውጥ \nየሕይወት ቃል ደስታ ሚሰጥ /2/ \nእርሱ ነው ያለም ሁሉ ቤዛ \nእርሱ ነው በደሙ የገዛ /2/\n \nቅዱስ ቁርባን .....\n \nየፍቅር ሚስጢር \nትርጉም ያለው \nእድግ ክቡር ድንቅ ስም ነው (2)\n \nፍቅር ነው እውነተኛ ፍቅር \nፍቅር ነው በእምነት ላታመኑት ዘወትር /2/\n \nቅዱስ ቁርባን .....\n \nየሰላም ምንጭ ጌታችን ነው \nጥልቅ ፍቅር ኢየሱስ ነው /2/ \nያዳነን የባረከን ስም ነው \nለነፍሳችንም መድሀኒት ነው /2/\n \nቅዱስ ቁርባን .......",msg)&Bot.editInlineKeyboard(b,msg)
