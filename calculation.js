var result = document.getElementById("result");

// edit関数で、押されたボタンに対応した文字を追加
function edit(elem) {
  result.value = result.value + elem.value;
}

// calc関数で、 Function を使用して数式を計算
function calc() {
  result.value = new Function("return " + result.value)();
}

// クリアボタン[C]を押すと中身が削除される
function C() {
  var textForm = document.getElementById("result");
  textForm.value = '';
}