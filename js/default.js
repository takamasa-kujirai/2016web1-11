
var number = Math.floor(Math.random()*10);
var answer = parseInt(window.prompt('数あてゲーム。0~9の数字を入力してください'));

int i=0;
var message;
for(i=0; i<10; i++){
if(answer === number) {
message = 'あたり';
break;
}else if (answer < number){
message = '残念もっと大きいです';
}else if (number <answer){
message = '残念もっと小さいです';
}else{
message = '0~9の数字を入力してください';
}
document.getElementById('choice').textContent = message;
}
