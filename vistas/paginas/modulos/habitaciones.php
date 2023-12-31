<?php
$categorias = ControladorCategorias::ctrMostrarCategorias();
?>

<!--=====================================
HABITACIONES
======================================-->

<div class="habitaciones container-fluid bg-light" id="habitaciones">

	<div class="container">

		<h1 class="pt-5 text-center">HABITACIONES</h1>

		<div class="row p-4 text-center">

			<?php foreach ($categorias as $key => $value): ?>

				<div class="col-12 col-lg-4 pb-3 px-0 px-lg-3">

					<a href="<?php echo $ruta . $value["ruta"]; ?>">

						<figure class="text-center">
							<img src="<?php echo $servidor . $value["img"]; ?>" class="img-fluid" width="100%">
							<div class="py-4">
								<p class="small py-2 mb-0 text-uppercase"><?php echo $value["tipo"];?></p>
								<h3 class="py-2 text-gray-dark mb-0" style="color: #000000; background: #ffffff;">S/<?php echo number_format ($value["continental_baja"],2);?> soles</h3>
								<h5 class="py-2 text-gray-dark border">Ver detalles <i class="fas fa-chevron-right ml-2"></i></h5>
							</div>
						</figure>

					</a>

				</div>
			<?php endforeach ?>

		</div>

	</div>

</div>