
var number = Math.floor(Math.random()*10);

var answer = parseInt(window.prompt('数あてゲーム。0~9の数字を入力してください'));

var message;
if(answer === number) {
message = 'あたり';
}else if (answer < number){
message = '残念もっと大きいです';
}else if (number <answer){
message = '残念もっと小さいです';
}else{
message = '0~9の数字を入力してください';
}
document.getElementById('choice').textContent = message;
