/*CMD
  command: /bt43
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
[{title:"⏩ለመመለስ⏪",command:"/tigmez"},{title:"🔼ዋና ገፅ🔽",command:"/menu"}]]

Bot.editMessage("🌷 ተመለስ ይኣኽለካ 🌷\n\nሓጥያትካ ንድሕሪት ደርቢኻ ናብ እግ/ር ተመለስ : ካብ ምብዳሉ ከኣ ተቖጠብ : ንሱ ካብ ፀልማት ኣውፂኡ ናብ ናይ ብርሃን ሕይወት ክመርሓካ እዩ : ካብ ሓጥያት ረሓቕ ናብቲ ኣዝዩ ልዑል ዝኾነ ኣምላካ ድማ ተመለስ ተመለስ !\n\nተደ:ኦ መንእሰይ ክርስትያን ተመለስ ይኣኽለካ\nፍርዲ ክኸውን'ዩ ፀብፃብ ክትህብ ኢኻ /2/\n\n1,በቢጊዜኡ ዝለዋወጥ ኩሉ ጥዒምካዮ ኩሉ ጥዒምካዮ\nብደስታ ብታሕጓስ ጊዜኻ ኣጥፊእካዮ ጊዜኻ ኣጥፊእካዮ\nተመለስ/3/ ይኣኽለካ ተመለስ\nተመለስ/3/ ይኣኽለካ ተመለስ\n\n2,ክብሪ ሃብቲ ናተይ ኢልካ ትኣምነሉ ኢልካ ትኣምነሉ\nገንዘብ ክዳን ኢልካ ኩሉ ወሲንካሉ ኢልካ ወሲንካሉ\nተመለስ/3/ ይኣኽለካ ተመለስ\nተመለስ/3/ ይኣኽለካ ተመለስ\n\n3,ዝበለፀ ክዳን እንናተኸደንካ እንዳተኸደንካ\nኣዘራርባኻ ቅጥዒ ከይገበርካ ቅጥዒ ከይገበርካ\nተመለስ/3/ ይኣኽለካ ተመለስ\nተመለስ/3/ ይኣኽለካ ተመለስ\n\n4,ጊዜ ከምዝከይድ ፍፁም ከይሓሰብካ ፍፁም ከይሓሰብካ\nጉብዝናን ሰሓቕን ጥራይ ዓጂቡካ ጥራይ ዓጂቡካ\nተመለስ/3/ ይኣኽለካ ተመለስ\nተመለስ/3/ ይኣኽለካ ተመለስ\nተመለስ/3/ ይኣኽለካ ተመለስ\n\n             🌷🙏🙏🙏🌷\n\nብመዘምራን ደብረ ቅ.ኣንጠንዮስ ጎዳይፍ ኣስመራ Vol#1",msg)&Bot.editInlineKeyboard(b,msg)
