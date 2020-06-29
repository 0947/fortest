/*CMD
  command: /covidal
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
[{title:"A",command:"/ca"},{title:"B",command:"/cb"},{title:"C",command:"/cc"},{title:"D",command:"/cd"},{title:"E",command:"/ce"}],[{title:"F",command:"/cf"},
{title:"G",command:"/cg"},{title:"H",command:"/ch"},{title:"I",command:"/ci"},
{title:"J",command:"/cj"}],[{title:"K",command:"/ck"},{title:"L",command:"/cl"},
{title:"M",command:"/cm"},{title:"N",command:"/cn"},{title:"O",command:"/co"}],
[{title:"P",command:"/cp"},{title:"Q",command:"/cq"},{title:"R",command:"/cr"},
{title:"S",command:"/cs"},{title:"T",command:"/ct"}],[{title:"U",command:"/cu"},
{title:"V",command:"/cv"},{title:"W",command:"/cw"},{title:"Y",command:"/cy"},
{title:"Z",command:"/cz"}],[{title:"✅GO BACK / ተመለስ",command:"/mytg"}]]

Bot.editMessage(user.first_name+"   *🇺🇸Please Select The First ALPHABET of the country name.\n\n🇪🇹እባክዎትን የሀገሩን ስም የመጀመሪያ ሆሄ ይምረጡ፡፡*",msg)&Bot.editInlineKeyboard(b,msg)
