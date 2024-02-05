import{propiedades_alquiler} from './propiedades.js'

document.addEventListener('DOMContentLoaded', () => {
    // Datos de ejemplo para propiedades

    function crearCardsAlquiler(propiedades_alquiler) {
        const cardContainer = document.querySelector('#cardContainer');
        propiedades_alquiler.forEach(propiedad => {
            const smokeMessage = propiedad.smoke ? 
                `<p class="text-danger">
                    <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>` :
                `<p class="text-success">
                    <i class="fas fa-smoking"></i> Permitido fumar
                </p>`;


            const petsMessage = propiedad.pets ?
                `<p class="text-success">
                    <i class="fas fa-paw"></i> Mascotas permitidas
                </p>`:
                `<p class="text-danger">
                    <i class="fas fa-ban"></i> No se permiten mascotas
                </p>`;


        const cardLayout = `
            <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />

              <div class="card-body">
              <h5 class="card-title">
                ${propiedad.nombre}
              </h5>
              <p class="card-text">
                ${propiedad.descripcion}
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
              </p>
              <p>
                <i class="fas fa-bed"></i> Habitaciones: ${propiedad.habitaciones} |
                <i class="fas fa-bath"></i> Baños: ${propiedad.banio}
              </p>
              <p><i class="fas fa-dollar-sign"></i> $${propiedad.costo}</p>
              ${smokeMessage}
              ${petsMessage}

            </div>
            
            </div>
          </div>`;
            cardContainer.innerHTML += cardLayout;
        });
    }

    // Llamar a la función para crear los cards con el array de propiedades
    crearCardsAlquiler(propiedades_alquiler);
});
