/*CMD
  command: /bt61
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
[{title:"⏩ለመመለስ⏪",command:"/tigmez"},{title:"🔼ዋና ገፅ🔽",command:"/mytig"}]]

Bot.editMessage("🌷🌷🌷  ሓለፋ ኣለዎ  🌷🌷🌷\n\n1,ክሓስብ ክጭነቕ እናነባዕኩ\nንብዓተይ ይደርዝ ብበረኸቱ\nስለይ ይሓልፈለይ ይብጀወለይ\nንዓይ ምፍቃሩሲ ሓለፋ ኣለዎ\n\n    ተደ:\nሓለፋ ኣለዎ ሓለፋ ኣለዎ\nኣምላኸይ ፍቕርኻ ሓለፋ ኣለዎ\nኢየሱሰይ ፍቕርኻ ኢየሱሰይ ፍቕርኻስ\nበይኑ'ዩ በይኑ በይኑ'ዩ በይኑ\nኣብ ውሽጢ ልበይ ኣብ ውሽጢ ልበይ\nጓህሪ ፈጢሩ የንድደኒ'ሎ\nኣብ ውሽጢ ልበይ ኣብ ውሽጢ ልበይ\nጓህሪ ፈጢሩ የንድደኒ'ሎ\n\n2,ስለይ ንኽትብል መስቀል ዝወዓልካምእንታይ ኢልካ'ውን ደምካ ዝረሃፅካ\nኣምላኸይ ፍቕርኻ ብሓቂ ፍሉይ'ዩ\nሓለፋ ኣለዎ ጎይታየ ፍቕርኻ\n\n3,ንዓይ ንባርያኻ ኣፍቂርካኒ ኢኻ\nስለፍቕረይ ኢልካ ብዙሕ ተሳቐኻ /nክሳዕ ኣብ መስቀል'ውን ሕይወትካ ዘሕለፍካ/nሓለፋ ኣለዎ ኣምላኸይ ፍቕርኻ\n\n               🌷🙏🙏🙏🌷\n\nብመዘምራን ደብረ ቅ.ኣንጠንዮስ ጎዳይፍ ኣስመራ Vol#2",msg)&Bot.editInlineKeyboard(b,msg)
