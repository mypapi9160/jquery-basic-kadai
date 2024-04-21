$(function() {
  $('window').on({
    'load': () => {
      //コンソールに「loadイベントが発生しました」と出力
      console.log('loadイベントが発生しました');
    },

    'scroll': () => {
      //コンソールに「scrollイベントが発生しました」と出力する
      console.log('scrollイベントが発生しました');
    }
  });
});