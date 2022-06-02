function downloadimage() {
    var container = document.getElementById("htmltoimage");
    html2canvas(container, { allowTaint: true }).then(function (canvas) {
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "mamerto" + mamerto_name.value ;
        link.href = canvas.toDataURL();
        link.target = '_blank';
        link.click();
    });
}

function queryParams() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    let value = params.nombre;
    let text = generateColors(value.toUpperCase());
    document.getElementById("text_generator").innerHTML = text;
    fitty('h2');
}

function toUpperCase(element) {
    let newtext = element.value.toUpperCase();
    element.value = newtext;
    let text = generateColors(newtext);
    document.getElementById("text_generator").innerHTML = text;
    fitty('h2');
}

function selectText() {
    var input = document.getElementById('mamerto_name');
    input.focus();
    input.select();
}

function generateColors(newtext) {
    newtext = newtext.slice(0,30);
    newtext.replace(/(?:\r\n|\r|\n)/g, '<br>');
    //newtext = newtext.replace(/\s/g, '');
    let text = "";
    colors = [
        '#F59B20',
        '#003399',
        '#E21118',
        '#25A038',
        '#9900CC',

    ];
    var cont = -1;
    cantidadLetras = newtext.length;
    var flag = 0;
    for (var x = 0; x < cantidadLetras; x++) {
        cont++;
        if (cont > 4 ) {
            cont = 0;
        }
        if (newtext[x].charCodeAt(0) == 10) {
            console.log("aq")
            newtext[x] = "</br>";
            flag = 1;
        }
        if (flag == 1) {
            text += "</br>";
        } else {
            text += "<font color=" + colors[cont] + ">" + newtext[x] + "</font>";
        }
        flag = 0;
        
    }
    text += "<font color=" + colors[4] + ">@</font>";
    return text;
}