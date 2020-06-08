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

let msg = User.getProperty("msgid");

var b =[
[{title:"💎ቅዱስ እንጦንዮስ💎",command:"/antony"},{title:"💎ቅዱስ በርናርዶስ💎",command:"/bernand"}],
[{title:"💎ቅድስት ጃና💎",command:"/jana"},{title:"💎መቁጠሪያ💎",command:"/mekux"}],
[{title:"💎ማርሴሊኖ💎",command:"/marse"},{title:"💎ቤኔዲክቶስ 16💎",command:"/ben16"}],
[{title:"💎ባርቴክ💎",command:"/barh"},{title:"💎ቅ.ቫለንታይን💎",command:"/kval"}],
[{title:"💎ቅ.አቡነ ብሩክ💎",command:"/abbura"},{title:"💎ካሞን ዴ ሳንቲያጎ💎",command:"/camon"}],
[{title:"💎ቅ.አውጎስጢኖስ💎",command:"/aug"},{title:"💎እህት ማርያ ሮዛ💎",command:"/marya"}],
[{title:"💎ብፁእ ገብረ ሚካኤል💎",command:"/mikh"}],
[{title:"💎የእስካፒለር ታምራት💎",command:"/eska"},{title:"💎ቅዱስ ዮሴፍ ሞስቲካ💎",command:"/kym"}],
[{title:"🔦ወደ ዋናው ገጽ ለመመለስ🔦 ",command:"/menu M"}],
]

Bot.editMessage(user.first_name+" በዚህ button የቅዱሳን የህይወት ታሪክ እና ምስክርነቶችን ያገኛሉ፡፡ ከዚህ በታች ያሉትን በተኖች ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
