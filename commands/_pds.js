/*CMD
  command: /pds
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

Bot.editMessage("እውነተኛ ደስታ የሚገኘው ያለንን ከሰዎች ጋር በመካፈል ነው።\nር.ሊ.ጳ ፍራንቸስኮስ",msg)&Bot.editInlineKeyboard(b,msg)
