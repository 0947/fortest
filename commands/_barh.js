/*CMD
  command: /barh
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
[{title:"1",command:"/barh1"},{title:"2",command:"/barh2"},{title:"3",command:"/barh3"}],
[{title:"4",command:"/barh4"},{title:"5",command:"/barh5"},{title:"6",command:"/barh6"}],
[{title:"7",command:"/barh7"},{title:"8",command:"/barh8"}],
[{title:"⏮ለመመለስ",command:"/kidus"},{title:"🔼ዋና ገጽ",command:"/menu"}]]

Bot.editMessage("ከዚህ በታች የባርቴክ ታሪክ በክፍል አዘጋጅተናል ከታች ያሉትን በተኖች ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
