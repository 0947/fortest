/*CMD
  command: /bt39
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

Bot.editMessage("🌷 ተለመን ጎይታ 🌷\n\n1,ትሕትና ክለብስ ከም ፍቓድካ\nኣእምሮ ክገብር ከም ድልየትካ\nሕዝብኻ ፀዊዕካ ዝመራሕካ\nፀዋዕታይ ፈሊጠ ክስዕበካ\n\nተደ:ተለመን ጎይታ ነዓ ናብ ባሮትካ\nተለመን ኢየሱስ ነዓ ናብ ሕዝብኻ\nልበይ ከፊተ'የ ክፅበየካ /2/ x 2\n\n2,ትዕቢት ንኸይገብር ነጊርካኒ\nብሓጥያት ክጠዓስ ፀዊዕካኒ\nነዓኻ ክመስል ከምዘሎኒ\nትእዛዝካ ክፍፅም ኣኽእለኒ\n\n3,ኣእዳወይ ክዝርግሕ ንኽብርኻ\nዘይትድርብየኒ ለዋህ ኢኺ\nምሕረት ንኽሓትት ኣብ ቅድሜኻ\nተንበርኪኸ ይፅበ ኣብ ትሕቴኻ\n\n     ተደ: ተለመን ኢየሱስ\n\n             🌷🙏🙏🙏🌷\n\nብመዘምራን ደብረ ቅ.ኣንጠንዮስ ጎዳይፍ ኣስመራ Vol#1",msg)&Bot.editInlineKeyboard(b,msg)
