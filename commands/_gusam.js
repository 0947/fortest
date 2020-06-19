/*CMD
  command: /gusam
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b =[
[{title:"🎧መዝሙር🎧",command:"/gusong"}],
[{title:"🌍ቋንቋ ቀይርኒ /  Language ",command:"/mytg"}]]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  ዛታ የጉራጊና ክፍሉ፡፡ ንቃር መረጃ ኤነንደ ኧኸሬ ኸኀታ መዝሙር ብቻ ጫሪም፡፡ ባሁዌ ጉራጊና መዝሙር ዌም ስብከት በረፐረ ናሁኒ",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+"  ዛታ የጉራጊና ክፍሉ፡፡ ንቃር መረጃ ኤነንደ ኧኸሬ ኸኀታ መዝሙር ብቻ ጫሪም፡፡ ባሁዌ ጉራጊና መዝሙር ዌም ስብከት በረፐረ ናሁኒ፡፡",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
