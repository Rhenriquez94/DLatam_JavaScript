const tipoMoneda = document.querySelector("#tipo-moneda");
const btnConvertir = document.querySelector("#btn-convertir");

 
btnConvertir.addEventListener("click", async function() {
    const inputValue = document.getElementById("input-value")
    const tipoMoneda = document.getElementById("tipo-moneda");
    const selectValue = tipoMoneda.value;
    const selectInputValue = inputValue.value

    try {
        const dataSet = await ObtenerApi();
        switch (selectValue) {
            case "uf":
                const ufValue = dataSet.uf.valor;
                const result = ufValue * selectInputValue;
                crearParrafo(result);
                break;
            case "dolar":
                const dolar = dataSet.dolar.valor;
                const result2 = selectInputValue / dolar ;
                crearParrafo(result2);
                break;

            case "euro":
                const euro = dataSet.euro.valor;
                const result3 = selectInputValue / euro ;
                crearParrafo(result3);
                break;
             
            case "utm":
                const utm = dataSet.utm.valor;
                const result4 = selectInputValue * utm ;
                crearParrafo(result4);
                break;
            case "bitcoin":
                const bitcoin = dataSet.bitcoin.valor;
                const result5 = selectInputValue * bitcoin ;
                crearParrafo(result5);
            default:
                console.log("Seleccione una moneda");
        }

    } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
    }
});


async function ObtenerApi(url = "https://mindicador.cl/api/") {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`¡Error HTTP! Estado: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error("¡Hubo un error al obtener la API:", error);
    }
}

function crearParrafo(result){
    const resultHtmlFormat = result.toFixed(2);
    const resultHtml = document.getElementById("result-value");
    resultHtml.textContent = `Resultado: $${resultHtmlFormat}`; 
}

