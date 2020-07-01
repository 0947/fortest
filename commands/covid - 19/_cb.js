/*CMD
  command: /cb
  help: 
  need_reply: 
  auto_retry_time: 
  folder: covid - 19
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("msgid");

var b =[
[{title:"BAHAMAS",command:"/country bs"}],
[{title:"BANGLADESH",command:"/country bd"}],
[{title:"BELARUS",command:"/country by"}],[{title:"BELGIUM",command:"/country be"}],
[{title:"BELIZE",command:"/country bz"}],
[{title:"BENIN",command:"/country bj"}],
[{title:"BHUTAN",command:"/country bt"}],
[{title:"BOLIVIA",command:"/country bo"}],
[{title:"BOSHIA AND HERZEGOVINA",command:"/country ba"}],
[{title:"BOTSWANA",command:"/country bw"}],
[{title:"BRAZIL",command:"/country br"}],
[{title:"BRUEI DARUSSALAM",command:"/country bn"}],
[{title:"BULGARIA",command:"/country bg"}],
[{title:"BURKINA FASO",command:"/country bf"}],
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("*Select The Country You Want*",msg)&Bot.editInlineKeyboard(b,msg)
