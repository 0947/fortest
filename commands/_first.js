/*CMD
  command: /first
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
[{ title: "ካቶሊካዊት?", command: "/catho" },{ title: "ሮማዊት?", command: "/rome" }],
[{ title: "ሐዋርያዊት?", command: "/piter" },{ title: "አንዲት?", command: "/one" }],
[{ title: "ቅድስት?", command: "/kid" },{ title: "በስእለ አድኖ ያለን አቋም", command: "/pic" }],
[{ title: "ር.ሊ.ጳጳሳት የጴጥሮስ ተተኪ ናቸው", command: "/teteki" }],
[{ title: "ፓፓ ማለት ምን ማለት ነው", command: "/papa" },{ title: "ፓፓ አይሳሳቱም", command: "/pop" }]
,[{ title: "ር.ሊ.ጳጳሳት እንዴት ነው የሚመረጡት?", command: "/cardinal" }],
    [{ title: "አብያተ ክርስቲያናት ከካቶሊክ መቼ ተለዩ", command: "/split"}],
[{title:"በቪድዮ የተደገፈ",command:"/hayal"},{title:"PDF መጽሀፍ",command:"/pdac"}],
[{title:"↩️ወደመጡበት ለመመለስ↩️",command:"/mych"}]]


var th=""+user.first_name+""

if(params=="M") 
{
Bot.editMessage(th+"  *በዚህ ገፅ ስለካቶሊክ እምነት በሚገባ ያውቁበታል፡፡ ከታች ያሉትን button ይጠቀሙ፡፡*",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+"  *በዚህ ገፅ ስለካቶሊክ እምነት በሚገባ ያውቁበታል፡፡ ከታች ያሉትን button ይጠቀሙ፡፡*",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
