/*CMD
  command: /first
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
[{ title: "🔐ቤ/ክ ለምን ካቶሊካዊት እንላለን?", command: "/catho" }],
   [ { title: "🔐ቤ/ክ ለምን ሮማዊት እንላለን?", command: "/rome" }],
[{ title: "🔐ቤ/ክ ለምን ሐዋርያዊት እንላለን?", command: "/piter" }],
[{ title: "🔐ቤ/ክ ለምን አንዲት እንላለን?", command: "/one" }],
[{ title: "🔐ቤ/ክ ለምን ቅድስት እንላለን?", command: "/kid" }],
[{ title: "🔐በስእለ አድኖ ያለን አቋም", command: "/pic" }],
[{ title: "🔐ር.ሊ.ጳጳሳት የጴጥሮስ ተተኪ ናቸው", command: "/teteki" }],
[{ title: "🔐ፓፓ ማለት ምን ማለት ነው", command: "/papa" }],
[{ title: "🔐ፓፓ አይሳሳቱም", command: "/pop" }],
[{ title: "🔐ር.ሊ.ጳጳሳት እንዴት ነው የሚመረጡት?", command: "/cardinal" }],
    [{ title: "🔐አብያተ ክርስቲያናት ከካቶሊክ መቼ ተለዩ", command: "/split"}],
[{title:"⏹በቪድዮ የተደገፈ▶️",command:"/hayal"}],
[{title:"↩️ወደመጡበት ለመመለስ↩️",command:"/menu"}]]

Bot.editMessage(user.first_name+" በዚህ ገፅ ስለካቶሊክ እምነት በሚገባ ያውቁበታል፡፡ ከታች ያሉትን button ይጠቀሙ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
