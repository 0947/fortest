/*CMD
  command: /kidus
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
[{title:"ቅ.ካርሎ አኩቲስ",command:"/carl"}],
[{title:"ቅዱስ እንጦንዮስ",command:"/antony"},{title:"ቅዱስ በርናርዶስ",command:"/bernand"}],
[{title:"ቅድስት ጃና",command:"/jana"},{title:"መቁጠሪያ",command:"/mekux"}],
[{title:"ማርሴሊኖ",command:"/marse"},{title:"ቤኔዲክቶስ 16",command:"/ben16"}],
[{title:"ቅድስት ባኪታ",command:"/bak"}],
[{title:"ባርቴክ",command:"/barh"},{title:"ቅ.ቫለንታይን",command:"/kval"}],
[{title:"ቅ.አቡነ ብሩክ",command:"/abbura"},{title:"ካሞን ዴ ሳንቲያጎ",command:"/camon"}],
[{title:"ቅ.አውጎስጢኖስ",command:"/aug"},{title:"እህት ማርያ ሮዛ",command:"/marya"}],
[{title:"ብፁእ ገብረ ሚካኤል",command:"/mikh"}],
[{title:"የእስካፒለር ታምራት",command:"/eska"},{title:"ቅዱስ ዮሴፍ ሞስቲካ",command:"/kym"}],
[{title:"ቅ.ዳግማዊ ጆን ፓል",command:"/jon5"}],
[{title:"እማሆይ ተሬዛ",command:"/ema5"},{title:"ፋጢማ",command:"/fat5"}],
[{title:"⬅️",command:"/mych"}],
]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  ይህ የኩናምኛ ገጽ ነው ካለን የመረጃ እጥረት ምክንያት መዝሙሮች ብቻ ጭነናል፡፡ ምናልባት እርስዎ ጋር ተጨማሪ መረጃ ካለ ያናግሩን፡፡",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+"  በዚህ button የቅዱሳን የህይወት ታሪክ እና ምስክርነቶችን ያገኛሉ፡፡ ከዚህ በታች ያሉትን በተኖች ይጠቀሙ",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
