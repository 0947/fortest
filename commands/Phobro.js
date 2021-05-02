/*CMD
  command: Phobro
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var pto = options.photo
var caption = options.caption
Api.sendPhoto({
photo: pto,
caption: ""+caption+""})
