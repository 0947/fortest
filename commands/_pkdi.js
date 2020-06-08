/*CMD
  command: /pkdi
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

Bot.editMessage("ሁልጊዜ መልካምን ማድረግ ጥረት ይፈልጋል፣\nየቅድስና መንገድ ለሰነፍ ሰው አይመችም!\n\n#ፓፓፍራንቼስኮስ",msg)&Bot.editInlineKeyboard(b,msg)
