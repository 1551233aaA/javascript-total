function cargarResumen() {
  fetch("resumen.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el archivo JSON.");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("banco").textContent = data.banco;
      document.getElementById("sucursal").textContent = data.sucursal;
      document.getElementById("titular").textContent = data.titular;
      document.getElementById("numero_cuenta").textContent = data.numero_cuenta;
      document.getElementById("numero_tarjeta").textContent = data["numero de tajeta"];
      document.getElementById("fecha_apertura").textContent = data.abierto;

      const saldoUSD = data.saldo.find(s => s.moneda === "USD");
      const saldoEUR = data.saldo.find(s => s.moneda === "EUR");

      document.getElementById("saldo_usd").textContent = `$${saldoUSD.monto.toFixed(2)}`;
      document.getElementById("saldo_eur").textContent = `€${saldoEUR.monto.toFixed(2)}`;
    })
    .catch(error => {
      console.error("Error al cargar el resumen:", error);
      alert("Hubo un problema al cargar el resumen bancario.");
    });
}
