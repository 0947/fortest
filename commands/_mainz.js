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
[{ title: "አማርኛ", command: "/mych" },{title:"ትግርኛ",command:"/mytig"},{title:"ወላይትኛ",command:"/mywl"}],
[{title:"ሳሆኛ",command:"/mysh"},{title:"Oromifaa",command:"/myor"},{title:"ሀድይኛ",command:"/hymy"}],
[{title:"ጉራጊኛ",command:"/gumy"},{title:"ብሌንኛ",command:"/mybl"},{title:"ኩናምኛ",command:"/myku"}],
[{title:"English",command:"/myin"},{title:"👨‍💻Developer",command:"/enadmz"},{title:"About",command:"/enfq"}],
[{title:"⚒️Track Covid-19 Info - የኮሮና መረጃ🗑",command:"/scov"}]]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  እንኳን ወደ catholic web የቴሌግራም bot በደህና መጡ፡፡ ከታች ቋንቋ መርጠው ይግቡ፡፡\n*Welcome to this bot, select your language below*",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+"  እንኳን ወደ catholic web የቴሌግራም bot በደህና መጡ፡፡ ከታች ቋንቋ መርጠው ይግቡ፡፡\n*Welcome to this bot, select your language below*",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
