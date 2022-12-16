var cad = `
	<div class="swiper-container mySwiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
	<div class="swiper-wrapper" id="swiper-wrapper-e663671e776a9540" aria-live="polite" style="transform: translate3d(0px, 0px, 0px);">
	`;

for (let i = 0; i < data.length; i++) {
	cad += `
	<div class="swiper-slide" role="group" aria-label="${data[i].id}/31" id="tarjeta-creo" style="background-color: rgba(0, 0, 0, 0);">
		<div class="card" style="overflow: visible;">
			<div class="card-image" id="fotitos">
				<img class="activator" src="${data[i].img}">
				<div class="info-container activator"><i class="fa-regular fa-eye"></i></div>
				<div class="centrado"></div>
			</div>
			<div class="card-content" id="contenido-tarjeta">
				<span class="card-title activator" id="span-nombre-card"> <p id="nombre-card"> <b> ${data[i].nombre} </b></p></span>
				<p><button id="boton-adoptar">Adoptar</button></p>
			</div>
			<div class="card-reveal" style="display: none; transform: translateY(0%);">
				<span class="card-title activator text-darken-4" id="cont-nombre-reveal"><p id="nombre-margen"> <b>${data[i].nombre} </b></p>
				<div class="info-container"><i class="fa-solid fa-xmark" id="cruz"></i></div>
				<div class="centrado"></div>
				</span>
				<ul style="list-style: none;">
      				<li>Raza: ${data[i].raza}</li>
      				<li>Genero: ${data[i].genero}</li>
      				<li>Tamaño: ${data[i].tamaño}</li>
      				<li>Vacunas: ${data[i].vacunas}</li>
      				<li>Castrado: ${data[i].castrado}</li>
      				<li>Pelaje: ${data[i].pelaje}</li>
      				<li>Tratamiento: ${data[i].tratamiento}</li>  
    			</ul>
      		</div>
  		</div>
	</div>
		  `;
}
cad += `
    </div>
	<div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide"
        aria-controls="swiper-wrapper-e663671e776a9540" aria-disabled="false" id="boton-next"></div>
    <div class="swiper-button-prev swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide"
        aria-controls="swiper-wrapper-e663671e776a9540" aria-disabled="true" id="boton-prev"></div>
    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
	</div>
`;
document.getElementById("ingresarData").innerHTML = cad;

var swiper = new Swiper('.swiper-container', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		420: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		780: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		980: {
			slidesPerView: 4,
			spaceBetween: 50,
		},
	}
});