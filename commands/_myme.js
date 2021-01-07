/*CMD
  command: /myme
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
[{ title: "🏠የካቶሊክ ቤተክርስቲያን ምንነት", command: "/first" }],
[ { title: "♨️ቅ.ፋውስቲና", command: "/faustin" },{title:"⚠️COVID ፕሮግራሞች",command:"/covid"}],
[{title:"📜የቅዱሳን ታሪክ",command:"/kidus"},{title:"🙀የቮካል ስልጠና",command:"/vocal"}],
[{title:"💒ስብከቶች",command:"/thalk"},{title:"🔅ግዕዝ ዜማ",command:"/geezs"}],
[{title:"✝ጸሎት",command:"/xelo"},{title:"🎬ሲኒማ",command:"/catcin"}],
[{title:"📚PDF መፅሀፍት",command:"/cpdf"},{title:"📡የቫቲካን ራዲዮ",command:"/cvati"}],
[{title:"❓ጥያቄና መልስ✅",command:"/qans"}],
[{title:"🛡Application",command:"/capps"},{title:"🕎የቅዳሴ ስርአት",command:"/kidse"}],
[{title:"🎬ቪዲዮ",command:"/cvids"},{title:"✴️የቅዱሳን አባባል",command:"/abkidz"}],
[{title:"🎹keyboard",command:"/kibstl"},{title:"🇻🇦ፓፓ ፍራንሲስ",command:"/popfran"}],
[{title:"😇ፆታዊ ቅድስና",command:"/theolo"},{title:"🎧መዝሙሮች",command:"/mzmu"}],
[{ title: "👤Comment", command: "/amadm" },{title:"⁉️FAQ",command:"/faqsami"}],
[{title:"🌍ቋንቋ ቀይር / Change Language🌐",command:"/mytg"}]]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  እንኳን ወደዚህ ቦት በደህና መጡ፡፡ በዚህ ቦት ብዙ መረጃ ማግኘት ይችላሉ፡፡ ከታች ያለውን button ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+" እንኳን ወደዚህ ቦት በደህና መጡ፡፡ በዚህ ቦት ብዙ መረጃ ማግኘት ይችላሉ፡፡ ከታች ያለውን button ይጠቀሙ",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
