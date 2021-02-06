/*CMD
  command: /albu2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("msgid");

var b=[
[{title:"መቂ ኪ.ም #1",command:"/mkk"},{title:"ቅዱስ ዮሴፍ", command :"/kyk"}],
[{title:"ዱራሜ ኪ.ም",command:"/durk"},{title:"ካቴድራል ል.ማ", command :"/clm"}],
[{title:"ሻሸመኔ ጺ.ማ",command:"/sht"},{title:"ለንደን ኪ.ም", command :"/lndnkm"}],
[{title:"ጎንደር ደብረሰላም",command:"/dsmg"}],
[{title:"መቂ ኪ.ም #2",command:"/mkk2"},{title:"ድሬዳዋ ቅ.አጎስጢን #2", command :"/drag"}],
[{title:"ወልቂጤ ቅ.ሚ",command:"/wlkm"},{title:"ወሊሶ ቅ.ገ #2", command :"/wlsog"}],
[{title:"ቀርሜሎስ_ማ #3",command:"/krm3"},{title:"ጺዮን_ማ #2", command :"/tsi2"}],
[{title:"ዲላ ረ.ማ #2",command:"/drm2"},{title:"ጅማ ል.ማ #4", command :"/jmlm4"}],
[{title:"ፍራንቸስኮስ #1",command:"/frnch1"},{title:"ልደታ ማርያም #10", command :"/lmkm"}],
[{title:"ዘ.ሁሴን ኑረዲ",command:"/hn"}],
[{title:"⏭ለመመለስ",command:"/mzmu"},{title:" ↕️ዋና ገፅ ", command :"/mych"}]]

Bot.editMessage("በዚህ ገፅ የካቶሊካዊት ቤተክርስቲያን መዝሙሮች በአልበም ተቀምጠዋል፡፡ ከታች ያሉትን በተኖች ይጠቀሙ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
