/*CMD
  command: /fdx
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

Bot.editMessage("የጌታን ድምጽ ማዳመጥ ከፈለጋችሁ፣ ጉዞአችሁን ጀምሩ፣ ፍለጋችሁን መኖር ጀምሩ:: ጌታ የሚያናግረው ፍለጋ ላይ ያሉትን ሰዎች ነው!\n\n#ፓፓፍራነቼስኮስ #ትዊተር",msg)&Bot.editInlineKeyboard(b,msg)
