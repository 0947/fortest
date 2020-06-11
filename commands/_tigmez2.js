/*CMD
  command: /tigmez2
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
[{title:"⚜ብኣንነተይ መታን ከይምካሕ⚜",command:"/bt21"}],
[{title:"⚜ኢየሱስ ናዝራዊ ናተይ⚜", command :"/bt31"}],
[{title:"⚜ተለመን ጎይታ⚜",command:"/bt39"},{title:"⚜ተመለስ ይኣኽለካ⚜", command :"/bt43"}],
[{title:"⚜ኣደ መድሓኒና⚜",command:"/bt59"},{title:"⚜ሓለፋ ኣለዎ⚜", command :"/bt61"}],
[{title:"⚜ውዕለትካ ከሰተንትን⚜",command:"/bt51"},{title:"⚜ሕሩይ እግዚኣብሄር⚜", command :"/bt53"}],
[{title:"⚜ቤትካ ሰላመይ'ዩ⚜",command:"/bt55"},{title:"⚜ብጊዜ ንእስነትካ⚜", command :"/bt57"}],
[{title:"⚜ኣንቅሓና ኣበርትዓና⚜",command:"/bt63"},{title:"⚜ኢየሱስ ስለ ሓጥያተይ⚜", command :"/bt65"}],
[{title:"⚜ፍቕርኻስ ፍሉይ እዩ⚜",command:"/bt67"}],
[{title:"⚜እ/ር ዓቢ ነገር ገይሩለይ⚜", command :"/bt50"},{title:"⚜ኣምላኽ ንደቁ ይመርሕ⚜",command:"/bt47"}],
[{title:"⚜ስጋኻን ደምካን ወፊኻለይ⚜", command :"/bt45"},{title:"⚜ተስፋ አይቆርፅን ኢየ⚜",command:"/bt41"}],
[{title:"⚜መቑሕ ናይ ዓለም ሰበሮ⚜", command :"/bt36"},{title:"⚜ከመስግነካ ይደሊ ኣለኹ⚜",command:"/bt34"}],
[{title:"⏭ለመመለስ⏮",command:"/tigmez"},{title:" ↕️ዋና ገፅ↕️", command :"/mych"}]]

Bot.editMessage("ከዚህ በማስከተል የትግርኛ መዝሙሮችን በፅሁፍ አሰናድተናል፡፡ ደመዝሙሮቹን ስም ከታች መርጠው ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
