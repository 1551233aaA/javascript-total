async function cargarContenido() {
  const cradolares = document.getElementById("crusd");
  const eurausd = document.getElementById("eurusd");
  const bitcoins = document.getElementById("bitusd");

  const montodolares = 1;
  const montoeur = 1;
  const montobit = 1;

  try {
   
    const respuesta = await fetch("https://open.er-api.com/v6/latest/USD");
    const datos = await respuesta.json();
    const tasaCRC = datos?.rates?.CRC;

    if (tasaCRC) {
      const colones = montodolares * tasaCRC;
      cradolares.textContent = `${montodolares} dólares son aproximadamente ${colones.toFixed(2)} colones`;
    } else {
      cradolares.textContent = "Error al obtener tasa CRC";
    }

    
    const respuesta2 = await fetch("https://open.er-api.com/v6/latest/EUR");
    const datos2 = await respuesta2.json();
    const tasaeuros = datos2?.rates?.USD;

    if (tasaeuros) {
      const USD = montoeur * tasaeuros;
      eurausd.textContent = `${montoeur} euros son aproximadamente ${USD.toFixed(2)} dolares`;
    } else {
      eurausd.textContent = "Error al obtener tasa EUR";
    }


    const respuesta3 = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
    const datos3 = await respuesta3.json();
    const tasabit = datos3.bitcoin?.usd;

    if (tasabit) {
      const dolar = montobit * tasabit;
      bitcoins.textContent = `${montobit} bitcoin son aproximadamente ${dolar.toFixed(2)} dolares`;
    } else {
      bitcoins.textContent = "Error al obtener tasa BTC";
    }

  } catch (error) {
    console.error("Error al obtener alguna de las tasas de cambio:", error);
    eurausd.textContent = "Euro: Error";
    cradolares.textContent = "Colón: Error";
    bitcoins.textContent = "Bitcoin: Error";
  }
}


cargarContenido();
setInterval(cargarContenido, 60000);
