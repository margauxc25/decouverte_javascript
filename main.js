const test = document.querySelector(".test");
var count = 0;
test.addEventListener("click", function () {
    if (count % 2 == 0) {
    test.style.background = "yellow";
    count++;
    } else {
    test.style.background = "green";
    count++;
    }
    if (count % 5 == 0) {
    test.style.background = "red";
    }
    console.log(count);
    });


    function show_alert()
    {
    var name = document.getElementById('name').value;
    alert("Bonjour"+ name + "!");
    } 

    function show_alert() {
        const nom = document.getElementById("name").value;
        const lettres = /^[a-zA-Zä-ÿÄ-ÿ]+$/;
        const autorise = nom.match(lettres);
        const msg = document.getElementById('errorname')
        
        if (autorise) {
            document.getElementById('name').style.border = "4px solid green"
            msg.innerHTML="Bienjoué !" ;
            msg.style.background = "green";

        }

        else {
            document.getElementById('name').style.border = "4px solid red"
            msg.innerHTML="C'est faux recommences !";
            msg.style.background = "red";
        }
    
    }