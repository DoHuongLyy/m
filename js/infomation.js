function send(){
    var arr = document.getElementsByTagName('input');
    console.log(arr);
    var name = arr[0].value;
    var Email = arr[1].value;
    var sdt = arr[2].value; 
    var address = arr[3].value;   
    if(name == "") {
        alert("Vui lòng điền tên");
        return;
    }

    if(Email == "")
    {
        alert("Vui lòng điền Email");
        return;
    }
    if(sdt == ""){
        alert("Vui lòng điền số điện thoại");
        return;
    }
    if(address == ""){
        alert("Vui lòng điền địa chỉ");
        return;
    }      
    confirm('xác nhận thông tin của bạn!\n'+name+"\n"+Email+"\n"+sdt+"\n"+address+"\t")
    localStorage.setItem('cart', null);
    location.reload(); 
}