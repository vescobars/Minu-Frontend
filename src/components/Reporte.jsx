import "./Reporte.css";

function Reporte() {
  return (
    <>
      <div id="title">
        <h1>RESTAURANTE #1</h1>
        <p>Resumen historico de las operaciones del restaurante #1</p>
      </div>
      <div id="Ordenes">
        <h2>Ordenes</h2>
        <div class="grid-container">
          <div class="grid-item">TOTAL ORDENES: 10</div>
          <div class="grid-item">VALOR TOTAL: $99'999.999</div>
          <div class="grid-item">
            <input id="filtro" placeholder="Desde"></input>
            <input id="filtro" placeholder="Hasta"></input>
            <button id="filtro" type="button">
              APLICAR
            </button>
          </div>
        </div>
        <br></br>

        <div class="xscroll">
          <div class="orders">
            <div class="card">
              <h3>
                <a href="">Orden #1</a>
              </h3>
              <p class="completada">COMPLETADA</p>
              <p class="fecha">13/11/2022</p>
            </div>
            <div class="card">
              <h3>
                <a href="">Orden #2</a>
              </h3>
              <p class="completada">COMPLETADA</p>
              <p class="fecha">13/11/2022</p>
            </div>
            <div class="card">
              <h3>
                <a href="">Orden #3</a>
              </h3>
              <p class="completada">COMPLETADA</p>
              <p class="fecha">13/11/2022</p>
            </div>
            <div class="card">
              <h3>
                <a href="">Orden #4</a>
              </h3>
              <p class="completada">COMPLETADA</p>
              <p class="fecha">13/11/2022</p>
            </div>
            <div class="card">
              <h3>
                <a href="">Orden #5</a>
              </h3>
              <p class="completada">COMPLETADA</p>
              <p class="fecha">13/11/2022</p>
            </div>
            <div class="card">
              <h3>
                <a href="">Orden #6</a>
              </h3>
              <p class="completada">COMPLETADA</p>
              <p class="fecha">13/11/2022</p>
            </div>
            <div class="card">
              <h3>
                <a href="">Orden #7</a>
              </h3>
              <p class="completada">COMPLETADA</p>
              <p class="fecha">13/11/2022</p>
            </div>
            <div class="card">
              <h3>
                <a href="">Orden #8</a>
              </h3>
              <p class="completada">COMPLETADA</p>
              <p class="fecha">13/11/2022</p>
            </div>
            <div class="card">
              <h3>
                <a href="">Orden #9</a>
              </h3>
              <p class="completada">COMPLETADA</p>
              <p class="fecha">13/11/2022</p>
            </div>
            <div class="card">
              <h3>
                <a href="">Orden #10</a>
              </h3>
              <p class="completada">COMPLETADA</p>
              <p class="fecha">13/11/2022</p>
            </div>
            <div class="card">
              <h3>
                <a href="">Orden #11</a>
              </h3>
              <p class="completada">COMPLETADA</p>
              <p class="fecha">13/11/2022</p>
            </div>
          </div>
        </div>
      </div>

      <div id="Reviews">
        <h2>Reviews</h2>
        <div class="rxscroll">
          <div class="reviews">
            <div class="rcard">
              <h3>NombreUsuario</h3>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p class="comentario">
                Curabitur ut neque sed magna pharetra fringilla vel a ante.
                Suspendisse id suscipit mauris, et egestas lacus. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas.{" "}
              </p>
            </div>
            <div class="rcard">
              <h3>NombreUsuario</h3>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p class="comentario">
                Curabitur ut neque sed magna pharetra fringilla vel a ante.
                Suspendisse id suscipit mauris, et egestas lacus. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas.{" "}
              </p>
            </div>
            <div class="rcard">
              <h3>NombreUsuario</h3>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p class="comentario">
                Curabitur ut neque sed magna pharetra fringilla vel a ante.
                Suspendisse id suscipit mauris, et egestas lacus. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas.{" "}
              </p>
            </div>
            <div class="rcard">
              <h3>NombreUsuario</h3>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p class="comentario">
                Curabitur ut neque sed magna pharetra fringilla vel a ante.
                Suspendisse id suscipit mauris, et egestas lacus. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas.{" "}
              </p>
            </div>
            <div class="rcard">
              <h3>NombreUsuario</h3>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p class="comentario">
                Curabitur ut neque sed magna pharetra fringilla vel a ante.
                Suspendisse id suscipit mauris, et egestas lacus. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas.{" "}
              </p>
            </div>
            <div class="rcard">
              <h3>NombreUsuario</h3>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <p class="comentario">
                Curabitur ut neque sed magna pharetra fringilla vel a ante.
                Suspendisse id suscipit mauris, et egestas lacus. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas.{" "}
              </p>
            </div>
          </div>
        </div>

        <button id="descargar" type="button">
          DESCARGAR REPORTE
        </button>
      </div>
    </>
  );
}

export default Reporte;
