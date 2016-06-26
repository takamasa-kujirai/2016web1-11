var count=0;
var message;
var number = Math.floor(Math.random()*10);

for(count=0; count<10; count++){
var answer = parseInt(window.prompt('数あてゲーム。0~9の数字を入力してください'));

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
