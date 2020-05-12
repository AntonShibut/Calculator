function insert (butt) {
    document.form.textView.value =
     document.form.textView.value + butt;
}

function clean () {
    document.form.textView.value = "";
}

function back () {
    var a = document.form.textView.value;
    document.form.textView.value = a.substring (0, a.length-1); 
}

function result () {
    var a = document.form.textView.value;
    if(a) {
        document.form.textView.value = eval(a);
    }
}