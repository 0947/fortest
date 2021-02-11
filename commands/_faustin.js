/*CMD
  command: /faustin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b = [[{title:"👤የቅ.ፋውስቲና ፎቶ",command:"/fauph"}],
[{ title: "መፅሀፍት", command: "/fbk"},{title:"በድምጽ",command:"/faud"}],
[{ title: "ቪዲዮ", command: "/fvid"},{title:"ፎቶዎች", command:"/fpho"}],
[{title:"ጸሎት", command:"/fxl"},{title:"መዝሙር",command:"/mzfaust"}],
[{title:"<--",command:"/mych"}]]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  ✅ይህ የቅድስት ፋውስቲና የመረጃ ክፍል ነው፡፡\n•በዚህ ክፍል ስለ ቅድስት ፋውስቲና የምናወሳ ይሆናል፡፡\n✨መረጃዎችን በሚፈልጉት መልኩ\n📚መፅሀፍት\n🖼በፎቶ\n🎥በቪዲዮ\n🔇በድምጽ\n✅አሰናድተናል ከታች ያሉትን በተን ይጠቀሙ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+"  ✅ይህ የቅድስት ፋውስቲና የመረጃ ክፍል ነው፡፡\n•በዚህ ክፍል ስለ ቅድስት ፋውስቲና የምናወሳ ይሆናል፡፡\n✨መረጃዎችን በሚፈልጉት መልኩ\n📚መፅሀፍት\n🖼በፎቶ\n🎥በቪዲዮ\n🔇በድምጽ\n✅አሰናድተናል ከታች ያሉትን በተን ይጠቀሙ፡፡",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
