/*CMD
  command: /popfran
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
[{title:"የወሩ የፀሎት ሀሳብ",command:"/pomon"},{title:"አባባሎች",command:"/popaba"}],
[{title:"⬅️",command:"/mych"}],
]

Bot.editMessage(user.first_name+" ይህ የፓፓ ፍራንቺስኮስ ገጽ ነው ከታች ያሉ በተኖች ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
