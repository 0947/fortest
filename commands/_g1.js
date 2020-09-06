/*CMD
  command: /g1
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

Bot.editMessage("🌷🙏🌷 ረቡኒ ክብለካ🌷🙏🌷\n\n1,ንፋሳት ኣብ ዕምኮ ኢድካ እትእክቦ\nንማዕበላት ብቓልካ እተህድኦ \nንሰማያት ብዘይ ዓንዲ እተቑሞ\nንግብርኻ መን ይመስሎ መንከ ይወዳደሮ\n\n ተደ. ካብ ልዕሊ ኣኽራን እናነጠረ\n     ኣብ ልዕሊ ኮረቢት እናዘለለ\n     ድምፅኻ ይሰምዕ ኣሎ የእዛነይ \n     ብፍቕርኻ ይሟሙቕ ኣሎ ልበይ\n\n2,ቃልካ ኣምላኸይ ብሓቂ ንፁህ እዩ\nነቶም ኣባኻ ዝምዕቖቡ ዋልተኦም'ዩ\nብፀጋኻ መንገዶም ይጅምሩ\nኣብ ፅላልካ ባህ ኢልዎም(2)ይነብሩ\n\n3,ከም ሲላስ ክኸውን ሓዋርያካ\nከም ቨሮኒካ ክደርዞ ንገፅካ \nከም መግደላዊት ረቡኒ ረቡኒ ክብለካ\nጎይታየ ኣኽእለኒ ብፀጋኻ\n\n4,ከም ሲላስ ክኸውን ሓዋርያኻ\nከም ቨሮኒካ ክደርዞ ንገፅካ\nከም ቶማስ ክትንክፍ ክትንክፍ ጎድንኻ\nጎይታየ ኣኽእለኒ ብፀጋኻ\n\n\n           🌷🙏🙏🙏🌷\n\nብመዘምራን ቅ.ስላሴ ከረን vol#2",msg)&Bot.editInlineKeyboard(b,msg)
