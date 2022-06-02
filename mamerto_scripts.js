function downloadimage() {
    var container = document.getElementById("htmltoimage");
    html2canvas(container, { allowTaint: true }).then(function (canvas) {
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "mamerto" + mamerto_name.value + ".jpg";
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
}

function toUpperCase(element) {
    let newtext = element.value.toUpperCase();
    element.value = newtext;
    let text = generateColors(newtext);
    document.getElementById("text_generator").innerHTML = text;
}

function selectText() {
    var input = document.getElementById('mamerto_name');
    input.focus();
    input.select();
}

function generateColors(newtext) {
    newtext = newtext.slice(0,11);
    newtext = newtext.replace(/\s/g, '');
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
    for (var x = 0; x < cantidadLetras; x++) {
        cont++;
        if (cont > 4 ) {
            cont = 0;
        }
        text += "<font color=" + colors[cont] + ">" + newtext[x] + "</font>";
    }
    text += "<font color=" + colors[4] + ">@</font>";
    return text;
}