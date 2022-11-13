import './NuevoRestaurante.css'

function NuevoRestaurante() {
    return (
      <>
        <div id="title">
          <h1>AGREGAR RESTAURANTE</h1>
          <p>Llena los campos a continuación para agregar un nuevo restaurante a la cadena #2</p>
        </div>
        
        <form>
          <label for="rname">Nombre del restaurante</label><br></br>
          <input type="text" id="rname" name="rname"></input><br></br><br></br>

          <label for="descripcion">Descripcion</label><br></br>
          <input type="text" id="descripcion" name="descripcion"></input><br></br><br></br>

          <label for="direccion">Direccion</label><br></br>
          <input id="direccion" placeholder="Direccion"></input>
          <input id="direccion" placeholder="Ciudad"></input>
          <input id="direccion" placeholder="Localidad"></input>
          <input id="direccion" placeholder="Barrio"></input><br></br><br></br>
          
          <fieldset>
            <legend>Horario</legend>
            <input type="checkbox" id="Monday" value="Monday"></input>
            <label for="Monday"> Monday</label>
            <input id="Apertura" type="text"placeholder="Apertura" ></input><input id="Cierre"  placeholder="Cierre"></input><br></br>
            
            <input type="checkbox" value="Tuesday"></input>
            <label for="Tuesday"> Tuesday</label>
            <input id="Apertura" placeholder="Apertura"></input><input id="Cierre" placeholder="Cierre"></input><br></br>

            <input type="checkbox" value="Wednesday"></input>
            <label for="Wednesday"> Wednesday</label>
            <input id="Apertura" placeholder="Apertura" ></input><input id="Cierre" placeholder="Cierre" ></input><br></br>

            <input type="checkbox" value="Thursday"></input>
            <label for="Thursday"> Thursday</label>
            <input id="Apertura" placeholder="Apertura"></input><input id="Cierre" placeholder="Cierre"></input><br></br>
            
            <input type="checkbox" value="Friday"></input>
            <label for="Friday"> Friday</label>
            <input id="Apertura" placeholder="Apertura"></input><input id="Cierre" placeholder="Cierre"></input><br></br>

            <input type="checkbox" value="Saturday"></input>
            <label for="Saturday"> Saturday</label>
            <input id="Apertura" placeholder="Apertura"></input><input id="Cierre" placeholder="Cierre"></input><br></br>

            <input type="checkbox" value="Sunday"></input>
            <label for="Sunday"> Sunday</label>
            <input id="Apertura" placeholder="Apertura"></input><input id="Cierre" placeholder="Cierre"></input><br></br>
          </fieldset>

          <br></br><label for="rname">Menu</label><br></br>
          <input type="file" id="menu" name="menu" accept=".pdf"></input><br></br><br></br>
          <button type="button" id="add">AGREGAR RESTAURANTE</button>
          
          
        </form>  
      </>
    );
   }
   
   export default NuevoRestaurante;