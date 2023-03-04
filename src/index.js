const API = 'https://api.adviceslip.com/advice';

async function consejo() {
    const respuesta = await fetch(API);
    const respuestaJson = await respuesta.json();
    document.getElementById('consejoNumero').innerText = respuestaJson.slip.id;
    document.getElementById('consejo').innerText = `"${respuestaJson.slip.advice}"`;
}

consejo();

document.getElementById('btn1').addEventListener('click', consejo);