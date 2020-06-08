/*CMD
  command: /akhy
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
[{title:"ተመለስ",command:"/akw"}]
]

Bot.editMessage("ረዥም ቀጥ ያለ መስመር የብዙ ጥቃቅን እርስ በርሳቸው የተያያዙ ነጥቦች ወጤት ነው። ሕይወትም እንዲሁ የብዙ ሚሊየን ሰከንዶችና ደቂቃዎች ቅጥልጣይ ፍሬ ናት። እያንዳንዷን ነጥብ በትክክል አኑር ረጅሙ መስመር ቀጥ ያለ ይሆናል። እያንዳንዷን ደቂቃ በፍጽምና ኑራት ሕይወትህ ትቀደሳለች። \n#Cardinal François-Xavier Nguyễn Văn Thuận (ካርዲናል ፍራንቼስኮ ዛቪየር ጙኢን ቫን ቱወን)",msg)&Bot.editInlineKeyboard(b,msg)
