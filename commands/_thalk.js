/*CMD
  command: /thalk
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
[{title:"የክቡር አባ ምስራቅ[ዶ/ር] CD",command:"/aud"}],
[{title:"የኢየሱስ ወንድም እና እህቶች",command:"/brvs"}],
[{title:"ቃል ስጋ ሆነ",command:"/svo"},{title:"ሉቃ 1-19",command:"/89d"}],
[{title:"አሸናፊዎች ማን ናቸው?",command:"/ashn7"}],
[{title:"የቅዱስ ቁርባን ትምህርት",command:"/est"},{title:"ወጣትነት",command:"/wtt"}],
[{title:"በክርስቶስ መብሰል",command:"/mbsl"}],
[{title:"ካቶሊክ ማለት?",command:"/ashes"},{title:"ባንጸልይስ?",command:"/tlkb"}],
[{title:"ምስጢረ ተክሊል",command:"/mst"}],
[{title:"የጾም አስተንትኖ",command:"/ast8"},{title:"ፍልሰታ",command:"/fls3"}],
[{title:"አፅናኝቷ ማርያም",command:"/asn39"},{title:"ኤማሁስ",command:"/ema37"}],
[{title:"የአባቴን ቤት",command:"/abt3"},{title:"ዘኒቆዲሞስ",command:"/niko3"}],
[{title:"ሆሳእና",command:"/hos1"}],
[{title:"ፀሎተ ሀሙስ",command:"/xl37"},{title:"የቤትህ ቅንአት",command:"/bet9"}],
[{title:"⬅️",command:"/mych"}]]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  የሚፈልጉትን አስተምህሮት አሰናድተናል ከታች ባለው button ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+"  የሚፈልጉትን አስተምህሮት አሰናድተናል ከታች ባለው button ይጠቀሙ",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
