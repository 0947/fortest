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

let msg = User.getProperty("msgid");

var b =[
[{title:"የክቡር አባ ምስራቅ[ዶ/ር] CD",command:"/aud"}],
[{title:"የኢየሱስ ወንድም እና እህቶች",command:"/brvs"}],
[{title:"ቃል ስጋ ሆነ",command:"/svo"},{title:"ሉቃ 1-19",command:"/89d"}],
[{title:"የቅዱስ ቁርባን ትምህርት",command:"/est"}],
[{title:"ካቶሊክ ማለት?",command:"/ashes"},{title:"ባንጸልይስ?",command:"/tlkb"}],
[{title:"ምስጢረ ተክሊል",command:"/mst"}],
[{title:"⬅️",command:"/mych"}]]

Bot.editMessage(user.first_name+" የሚፈልጉትን አስተምህሮት አሰናድተናል ከታች ባለው button ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
