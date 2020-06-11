/*CMD
  command: /eska
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
[{title:"👁ተአምር 1👁",command:"/eska1"},{title:"👁ተአምር 2👁",command:"/eska2"}],
[{title:"👁ተአምር 3👁",command:"/eska3"},{title:"👁ተአምር 4👁",command:"/eska4"}],
[{title:"👁ተአምር 5👁",command:"/eska1"}],
[{title:"⏭ለመመለስ",command:"/kidus"},{title:"🔼ዋና ገጽ",command:"/mych"}]
]

Bot.editMessage("በዚህ ገጽ የእስካፒለር ተአምራትን ያገኛሉ ከታች ያሉትን በተኖች ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
