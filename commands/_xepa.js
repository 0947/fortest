/*CMD
  command: /xepa
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

Bot.editMessage("❤️ ፀሎት ወደ ቅዱስ ጳውሎስ ❤️\n\nደውያንን የፈወስክ አክሊልን የተቀበልክ ባለ መልእክት ቅዱስ ሐዋርያ ጳውሎስ ሆይ -- በምህረቱና በይቅርታው በዛት ስለ ቅዱስ ስሙ ነፍሳችንን ያድን ዘንድ ጌታችንን ለምንልን።",msg)&Bot.editInlineKeyboard(b,msg)
