function save_func(){
    var time0 = document.getElementById("t-overnight").value;
    var time1 = document.getElementById("t-d-tour").value;
    var time2 = document.getElementById("t-n-tour").value;
    var time3 = document.getElementById("t-3-day").value;

    var toArray = [];

    toArray.push(time0);
    toArray.push(time1);
    toArray.push(time2);
    toArray.push(time3);

    var toJson = JSON.stringify(toArray);

    var file = new Blob([toJson], {type:"text"});
    var anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(file);
    anchor.download = "jsonToText.txt";
    anchor.click();
}

function text_func(){
     const now = new Date();
    var Name = document.getElementById("Name").value;
    var Booking0 = document.getElementById("Booking0").value;
    var Booking1 = document.getElementById("Booking1").value;
    var Phone_Number = document.getElementById("Phone-Number").value;
    var Email = document.getElementById("Email").value;
    var Pax = document.getElementById("Pax").value;
    var Pet = document.getElementById("Pet").value;
    var Package = document.getElementById("Package").value;
    var Time0 = document.getElementById("Time0").value;
    var Time1 = document.getElementById("Time1").value;
    var Downpayment = document.getElementById("Downpayment").value;
    var Balance = document.getElementById("Balance").value;
    var Comment = document.getElementById("Comment").value;

    var toArray = [];    

    toArray.push(Name);
    toArray.push(Booking0);
    toArray.push(Booking1);
    toArray.push(Phone_Number);
    toArray.push(Email);
    toArray.push(Pax);
    toArray.push(Pet);
    toArray.push(Package);
    toArray.push(Time0);
    toArray.push(Time1);
    toArray.push(Downpayment);
    toArray.push(Balance);
    toArray.push(Comment);
    toArray.push(new Date().toLocaleString());

    var toJson = JSON.stringify(toArray);

    var file = new Blob([toJson], {type:"text"});
    var anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(file);
    anchor.download = Name+".txt";
    anchor.click();
}