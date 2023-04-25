// LLAMAR A LA API
let httpRequest = new XMLHttpRequest();
httpRequest.open('GET','https://api.bluelytics.com.ar/v2/latest', true);
httpRequest.setRequestHeader('Accept', 'application/json');
httpRequest.onload = async () => {
    if (httpRequest.status === 200) {
        const datosApi = await JSON.parse(httpRequest.responseText);
        
        const valorDolarBlue = datosApi.blue.value_sell;
        console.log(valorDolarBlue);
    }
    
}
httpRequest.send ();


//IMPRIMIR VALOR DE API EN HTML
