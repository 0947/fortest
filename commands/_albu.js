/*CMD
  command: /albu
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
[{title:"ዘ.ባንታየሁ",command:"/banti"},{title:"ክርስትና", command :"/xionew"}],
[{title:"ዘ.ወንዱ አታሮ",command:"/watar"},{title:"ዘ.ቢኒያም አ.ወርቅ", command :"/bini"}],
[{title:"ዘ.አሸናፊ ደበላ",command:"/ashd"},{title:"አባ ዳዊት", command :"/dava"}],
[{title:"ቦንጋ ኪ.ም",command:"/bongkid"},{title:"ድሬዳዋ ቅ.አጎስጢን", command :"/dragu"}],
[{title:"ዘ.መቅድም",command:"/mkgr"},{title:"ዲላ ረ.ማ", command :"/dlrm"}],
[{title:"ወሊሶ ቅ.ገ",command:"/wlkg"},{title:"መድሀኒዓለም #4", command :"/mdal4"}],
[{title:"ቅ.ቬንሰንት",command:"/kdven"},{title:"ቅ.ሚካኤል", command :"/kdmkl"}],
[{title:"ደብረ ቀርሜሎስ #4",command:"/dbrkr"}],
[{title:"መትሀራ #3",command:"/mthr3"},{title:"መድሀኒአለም #3", command :"/mdhn3"}],
[{title:"ል.ማርያም #6",command:"/ldtmr6"},{title:"ጅማ ል.ማ #2", command :"/jimal"}],
[{title:"ቀርሜሎስ #5",command:"/krml5"},{title:"ቀበና ኪ.ም", command :"/kbnak"}],
[{title:"ዘ.ኤደን #2",command:"/edi2"},{title:"ቀበና #4", command :"/kbna4"}],
[{title:"ሀዋሳ ኪ.ም",command:"/hawwa"},{title:"አሰላ ል.ማ", command :"/assla"}],
[{title:"ዘ.ዘውዱ ታደሰ",command:"/zwdu"},{title:"ዘ.ህይወት", command :"/zmhy"}],
[{title:"ቅ.ገብርኤል #4",command:"/kbr4"},{title:"ቅ.ማርያም", command :"/kdmr"}],
[{title:"አባ ኤፍሬም #2",command:"/efram"},{title:"ዘ.ብርቱካን", command :"/brtuk"}],
[{title:"ደብረዘይት #2",command:"/dbrz"},{title:"ሆሳእና ቅ.ስ", command :"/hosan"}],
[{title:"⏭ለመመለስ",command:"/mzmu"},{title:" ↕️ዋና ገፅ ", command :"/mych"}]]

Bot.editMessage("በዚህ ገፅ የካቶሊካዊት ቤተክርስቲያን መዝሙሮች በአልበም ተቀምጠዋል፡፡ ከታች ያሉትን በተኖች ይጠቀሙ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
