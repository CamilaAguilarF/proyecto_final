document.getElementById('carbonFootprintForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const electricidad = parseFloat(document.getElementById('electricidad').value);
    const transporte = parseFloat(document.getElementById('transporte').value);
    const vuelos = parseInt(document.getElementById('vuelos').value);

    // Factores de emisión aproximados (kg CO2 por unidad)
    const factorElectricidad = 0.233; // kg CO2 por kWh
    const factorTransporte = 0.120; // kg CO2 por km
    const factorVuelo = 250; // kg CO2 por vuelo

    // Cálculo de la huella de carbono
    const huellaElectricidad = electricidad * factorElectricidad * 12; // anual
    const huellaTransporte = transporte * factorTransporte * 52; // anual
    const huellaVuelo = vuelos * factorVuelo;

    const huellaTotal = huellaElectricidad + huellaTransporte + huellaVuelo;

    document.getElementById('result').innerText = `Tu huella de carbono anual es de aproximadamente ${huellaTotal.toFixed(2)} kg de CO2.`;
});