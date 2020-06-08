/*CMD
  command: /fkpr
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

Bot.editMessage("ለኢየሱስ ይህን ያህል የሚባል የፍቅር ፐርሰንት (%)” ደስ አያሰኘውም፣ 20%፣ 50% ወይም 60% ፐርሰንት እወደዋለሁ የሚል ነገር አይሰራም! ወይ መቶ በመቶ እንወደዋለን፣ወይ ጭራሽ አንወደውም!",msg)&Bot.editInlineKeyboard(b,msg)
