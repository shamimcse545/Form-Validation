//form validation 
var sub = document.getElementById("sd");
sub.onclick = function validate(){

    var n = document.getElementById("fn");
    var m = document.getElementById("ps");
    var o = document.getElementById("dp");
    var p = document.getElementById("id");
    var q = document.getElementById("cg");

    if(n.value=='' ||m.value==''){
        alert("Field can't be empty");
}

    else{}
    if(o.value=='' ||p.value=='' || q.value==''){
        alert("Field Khali thakle submit hobo na");
}
    else{}


    if(m.value.length<3 || m.value>9){
    alert("Password is not valid");
    }
    var str=n.value.slice(0,1);
    if(str=='_' || str=='$'){
        alert("Username is not valid");
    }

}      