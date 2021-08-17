
// capturando localizacao
if ("geolocation" in navigator) {
    console.log('ativo');
    navigator.geolocation.getCurrentPosition(async function (position) {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        const lat = position.coords.latitude
        document.getElementById('latitude').textContent = lat. toFixed ( 2 ) ;
        const lon = position.coords.longitude
        document.getElementById('longetude').textContent = lon. toFixed ( 2 ) ;

        // criando um json para a loc
        // AQUI ESTOU PEGANDO OS DADOS DO JS
        //EMPACOTANDO COMO UM POST 
        // E ENVIANDO PARA EU ENDPOINT E REBO UM LOG DO CONSOLE 
        const data = { lat, lon };
        const options = {
            method: 'Post',
            headers: {
                'Content_Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);
       

      });
  } else {
    alert("I'm sorry, but geolocation services are not supported by your browser.");
  }

// para obter os dados do cliente da localizacao dele vamos presisar 
// Routing 
// Json parsing 
// POST with fetch()

