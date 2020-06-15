/*CMD
  command: /mainz
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
[{ title: "🇪🇹አማርኛ", command: "/mych" },{title:"🇪🇹ትግርኛ",command:"/mytig"}],
[{title:"🇪🇹ወላይትኛ",command:"/mywl"},{title:"🇺🇸English",command:"/myeg"}]]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  እንኳን ወደ catholic web የቴሌግራም bot በደህና መጡ፡፡ ከታች ቋንቋ መርጠው ይግቡ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+"  እንኳን ወደ catholic web የቴሌግራም bot በደህና መጡ፡፡ ከታች ቋንቋ መርጠው ይግቡ፡፡",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
