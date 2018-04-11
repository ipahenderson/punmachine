// 1. Copy your CSV text into https://thdoan.github.io/mr-data-converter/ and Output as "JSON - Properties"
// 2. Paste the output text after "var arr =" below
// 3. Use find and replace to remove the "" from the property name
// - i.e. search for "number" and change it to number
// - check that the number of videos matches found results
// -  you MUST use the Case Sensitive finding option [Aa] symbol
//


var arr =
//PASTE HERE

[{number:0,src:"http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4",pun:"JELLYFISH?",puntime:0, type:"jelly"},
{number:1,src:"/videos/0001.mp4",pun:"meadia",puntime:9, type:"bedroom"},
{number:2,src:"/videos/0002.mp4",pun:"hans down",puntime:7.3, type:"bedroom"},
{number:3,src:"/videos/0003.mp4",pun:"wristy business",puntime:7.5, type:"naked"},
{number:4,src:"/videos/0052.mp4",pun:"ice to meet you",puntime:13.5, type:"snow"}]


//DONT REMOVE THIS
module.exports = arr;
