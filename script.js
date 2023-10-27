var Data;
var links= [];



async function Conexion(){
    var url = "http://localhost:3000/"
    await fetch(url, {headers: {"authorization" : "123456" }}).then(response=>response.json()).then(json=>{Data=json;});
}

function Show1(){
    Conexion();
    var div = document.getElementById("Main");
    var div2 = document.getElementById("Main2");
    var div3 = document.getElementById("Main3");
    var div4 = document.getElementById("Main4");
    var div5 = document.getElementById("Main5");
    var div6 = document.getElementById("Main6");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");

    for(let i=0; i < 1; i++){
        var h1 = document.createElement("h1");
        var h2 = document.createElement("h2");
        var h3 = document.createElement("h3");
        var h4 = document.createElement("h4");
        var h5 = document.createElement("h5");
        var h6 = document.createElement("h6");
        h1.innerHTML = Data[0].clase;
        div.appendChild(h1);
        h2.innerHTML = "Fuerza: "+ Data[0].atributos.fuerza;
        div2.appendChild(h2);
        h3.innerHTML = "Destreza: "+ Data[0].atributos.destreza;
        div3.appendChild(h3);
        h4.innerHTML = "inteligencia: "+ Data[0].atributos.inteligenia;
        div4.appendChild(h4);
        h5.innerHTML = "Carisma: "+ Data[0].atributos.carisma;
        div5.appendChild(h5);
        h6.innerHTML = "Suerte: "+ Data[0].atributos.suerte;
        div6.appendChild(h6);
        
        button1.innerHTML = "Hacha";
        button2.innerHTML = "Espada";
        button3.innerHTML = "Escudo";
        div.appendChild(button1);
        button1.addEventListener("click", () => {alert("Haz seleccionada exitosamente... "+ Data[0].armas[0])});
        div.appendChild(button2);
        button2.addEventListener("click", () => {alert("Haz seleccionada exitosamente... "+ Data[0].armas[1])});
        div.appendChild(button3);
        button3.addEventListener("click", () => {alert("Haz seleccionada exitosamente... "+ Data[0].armas[2])});
    }

    var h1 = document.createElement("h1");
    h1.innerHTML = Data;
    div.style.color = "#49be25";
    div.style.fontFamily = "Arial";
    var h2 = document.createElement("h2");
    h2.innerHTML = Data;
    var h3 = document.createElement("h3");
    h3.innerHTML = Data;
    var h4 = document.createElement("h4");
    h4.innerHTML = Data;
    var h5 = document.createElement("h5");
    h5.innerHTML = Data;
    var h6 = document.createElement("h6");
    h6.innerHTML = Data;
}

function Show2(){
    Conexion();
    var div = document.getElementById("Main");
    var div2 = document.getElementById("Main2");
    var div3 = document.getElementById("Main3");
    var div4 = document.getElementById("Main4");
    var div5 = document.getElementById("Main5");
    var div6 = document.getElementById("Main6");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");

    for(let i=0; i < 1; i++){
        var h1 = document.createElement("h1");
        var h2 = document.createElement("h2");
        var h3 = document.createElement("h3");
        var h4 = document.createElement("h4");
        var h5 = document.createElement("h5");
        var h6 = document.createElement("h6");
        h1.innerHTML = Data[1].clase;
        div.appendChild(h1);
        h2.innerHTML = "Fuerza: "+ Data[1].atributos.fuerza;
        div2.appendChild(h2);
        h3.innerHTML = "Destreza: "+ Data[1].atributos.destreza;
        div3.appendChild(h3);
        h4.innerHTML = "inteligencia: "+ Data[1].atributos.inteligenia;
        div4.appendChild(h4);
        h5.innerHTML = "Carisma: "+ Data[1].atributos.carisma;
        div5.appendChild(h5);
        h6.innerHTML = "Suerte: "+ Data[1].atributos.suerte;
        div6.appendChild(h6);
        
        button1.innerHTML = "Hacha";
        button2.innerHTML = "Espada";
        button3.innerHTML = "Escudo";
        div.appendChild(button1);
        button1.addEventListener("click", () => {alert("Haz seleccionada exitosamente... "+ Data[0].armas[0])});
        div.appendChild(button2);
        button2.addEventListener("click", () => {alert("Haz seleccionada exitosamente... "+ Data[0].armas[1])});
        div.appendChild(button3);
        button3.addEventListener("click", () => {alert("Haz seleccionada exitosamente... "+ Data[0].armas[2])});
    }

    var h1 = document.createElement("h1");
    h1.innerHTML = Data;
    div.style.color = "#49be25";
    div.style.fontFamily = "Arial";
    var h2 = document.createElement("h2");
    h2.innerHTML = Data;
    var h3 = document.createElement("h3");
    h3.innerHTML = Data;
    var h4 = document.createElement("h4");
    h4.innerHTML = Data;
    var h5 = document.createElement("h5");
    h5.innerHTML = Data;
    var h6 = document.createElement("h6");
    h6.innerHTML = Data;
}

function Show3(){
    Conexion();
    var div = document.getElementById("Main");
    var div2 = document.getElementById("Main2");
    var div3 = document.getElementById("Main3");
    var div4 = document.getElementById("Main4");
    var div5 = document.getElementById("Main5");
    var div6 = document.getElementById("Main6");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");

    for(let i=0; i < 1; i++){
        var h1 = document.createElement("h1");
        var h2 = document.createElement("h2");
        var h3 = document.createElement("h3");
        var h4 = document.createElement("h4");
        var h5 = document.createElement("h5");
        var h6 = document.createElement("h6");
        h1.innerHTML = Data[2].clase;
        div.appendChild(h1);
        h2.innerHTML = "Fuerza: "+ Data[2].atributos.fuerza;
        div2.appendChild(h2);
        h3.innerHTML = "Destreza: "+ Data[2].atributos.destreza;
        div3.appendChild(h3);
        h4.innerHTML = "inteligencia: "+ Data[2].atributos.inteligenia;
        div4.appendChild(h4);
        h5.innerHTML = "Carisma: "+ Data[2].atributos.carisma;
        div5.appendChild(h5);
        h6.innerHTML = "Suerte: "+ Data[2].atributos.suerte;
        div6.appendChild(h6);
        
        button1.innerHTML = "arco con flecha";
        button2.innerHTML = "cuchillo";
        button3.innerHTML = "pocion de vida";
        div.appendChild(button1);
        button1.addEventListener("click", () => {alert("Haz seleccionada exitosamente... "+ Data[2].armas[0])});
        div.appendChild(button2);
        button2.addEventListener("click", () => {alert("Haz seleccionada exitosamente... "+ Data[2].armas[1])});
        div.appendChild(button3);
        button3.addEventListener("click", () => {alert("Haz seleccionada exitosamente... "+ Data[2].armas[2])});
    }

    var h1 = document.createElement("h1");
    h1.innerHTML = Data;
    div.style.color = "#49be25";
    div.style.fontFamily = "Arial";
    var h2 = document.createElement("h2");
    h2.innerHTML = Data;
    var h3 = document.createElement("h3");
    h3.innerHTML = Data;
    var h4 = document.createElement("h4");
    h4.innerHTML = Data;
    var h5 = document.createElement("h5");
    h5.innerHTML = Data;
    var h6 = document.createElement("h6");
    h6.innerHTML = Data;
}




function Exctract(){
    links = document.getElementsByTagName("a");
    links[0].innerHTML = "Google";
    links[0].href = "https://www.google.com";
    console.log(links.length);
}
