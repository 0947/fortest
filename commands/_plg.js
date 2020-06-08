/*CMD
  command: /plg
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
[{title:"ተመለስ",command:"/popaba"}]
]

Bot.editMessage("“እኛ ለጋሾች ስንሆን እግ/ር ታላላቅ ነገሮችን በሕይወታችን ውስጥ ይፈጽማል”\n\n#ፓፓ ፍራንቸስኮስ",msg)&Bot.editInlineKeyboard(b,msg)
