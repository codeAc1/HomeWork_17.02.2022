function start_1() {

    if (confirm("Secim et") == true) {
        document
            .getElementById("body")
            .style
            .backgroundColor = "black"
    } else {
        document
            .getElementById("body")
            .style
            .backgroundColor = "red"
    }

}

function start_2() {
    let age = prompt("Yaşınızı daxil edin");

    if (isNaN(age) || age.indexOf(' ') >= 0) {
        alert(
            "Ancaq rəqəm daxil edilməlidir boşluq və ya digər simvollar ola bilməz!!!"
        )
        start_2();
    } else {
        if (age.length > 0) {
            if (age < 18) {
                alert(" Diqqət !!! siz bu sehifəyə daxil ola bilmərsiniz  ")
            } else {
                alert("Ugurlu giris")
            }

        } else {
            alert("bos olmaz")
            start_2();
        }
    }

}

function start3_show() {
    document
        .getElementById("person_form")
        .style
        .display = "block"
}

function start_3() {
    var name = document
        .getElementById("name")
        .value;
    var surname = document
        .getElementById("surname")
        .value;
    var psw = document
        .getElementById("psw")
        .value;

    let Person = {
        FirstName: name,
        SurName: surname,
        password: psw,
        fullName: function () {
            return this.FirstName + " " + this.SurName;
        }
    }

    document
        .getElementById("fullname")
        .innerHTML = Person
        .fullName()
        .toUpperCase()
        .valueOf();
}
