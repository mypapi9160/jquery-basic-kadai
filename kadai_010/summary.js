$(function(){
  //「文字色変化」ボタンを押したとき
  $('#change-color').on('click' , function(){
    //任意の色に更新
    $('#target').css('color' , 'pink');
  });

  //「文字内容変化」ボタンを押したとき
  $('#change-text').on('click' , function(){
    //任意の文字内容に更新
    $('#target').text('Hello!');
  });

  //「フェードアウト」ボタンを押したとき
  $('#fade-out').on('click' , function(){
    //フェードアウトで文字が消える
    $('#target').fadeOut();
  });

  //「フェードイン」ボタンを押したとき
  $('#fade-in').on('click' , function(){
    //フェードインで文字が現れる
    $('#target').fadeIn();
  });


});