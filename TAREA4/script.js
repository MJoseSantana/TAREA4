function iniciarOperaciones() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let resultadosTotales = [];
        
        // Ejecutar todas las iteraciones en un solo bucle
        for (let i = 1; i <= 5; i++) {
            let operacion, resultado;
            switch (i) {
                case 1:
                    operacion = `Suma: ${num1} + ${num2}`;
                    resultado = num1 + num2;
                    break;
                case 2:
                    operacion = `Resta: ${num1} - ${num2}`;
                    resultado = num1 - num2;
                    break;
                case 3:
                    operacion = `Multiplicación: ${num1} * ${num2}`;
                    resultado = num1 * num2;
                    break;
                case 4:
                    operacion = `División: ${num1} / ${num2}`;
                    resultado = num1 / num2;
                    break;
                case 5:
                    operacion = `Módulo: ${num1} % ${num2}`;
                    resultado = num1 % num2;
                    break;
            }

            // Guardar el resultado en el array
            resultadosTotales.push({
                iteracion: i,
                operacion: operacion,
                resultado: resultado
            });
        }

        // Mostrar todos los resultados en una tabla
        let tablaResultados = `<table>
            <tr>
                <th>Iteración</th>
                <th>Operación</th>
                <th>Resultado</th>
            </tr>`;

        resultadosTotales.forEach(result => {
            tablaResultados += `
                <tr>
                    <td>${result.iteracion}</td>
                    <td>${result.operacion}</td>
                    <td>${result.resultado}</td>
                </tr>
            `;
        });

        tablaResultados += `</table>`;

        document.getElementById('resultados').innerHTML = tablaResultados;
    } else {
        document.getElementById('resultados').innerHTML = `<p style="color:red;">Por favor ingrese números válidos.</p>`;
    }
}
