function saveStorage(id) {
    var target = document.getElementById(id);
    var str = target.value;
    //保存数据的方法 key value
    sessionStorage.setItem("message",str);
}

function loadStorage(id) {
    var target = document.getElementById(id);
    //读取数据
    var msg = sessionStorage.getItem("message");
    target.innerHTML = msg;
}