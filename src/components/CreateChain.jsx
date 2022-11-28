import BackgroundDots from "./BackgroundDots";

function CreateChain() {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center w-100">
        <div
          className="w-100 d-flex flex-column justify-content-center align-items-center py-5"
          style={{ backgroundColor: "#ffdd86" }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#6a1818",
            }}
            className="rounded-circle"
          />
          <h2 className="m-0" style={{ fontSize: "100px" }}>
            MinU
          </h2>
          <h3 className="m-0 mt-4" style={{ fontSize: "20px" }}>
            Agregar Cadena
          </h3>
        </div>
        <div className="w-100 d-flex flex-column justify-content-center align-items-center py-5 position-relative">
          <BackgroundDots className="top-0 end-0" />
          <BackgroundDots className="bottom-0 start-0" />
          <form>
          <label for="rname">Nombre de la cadena</label><br></br>
            <input type="text" name="rname" className="w-100 mt-1 rounded"></input><br></br><br></br>

            <label for="rname">Nombre del restaurante</label><br></br>
            <input type="text" name="rname" className="w-100 mt-1 rounded"></input><br></br><br></br>

            <label for="descripcion">Descripcion</label><br></br>
            <input type="text" name="descripcion" className="w-100 mt-1 rounded"></input><br></br><br></br>

            <label for="direccion">Direccion</label><br></br>
            <input className="w-20 mt-1 rounded" placeholder="Direccion"></input>
            <input className="w-20 mt-1 rounded" placeholder="Ciudad"></input>
            <input className="w-20 mt-1 rounded" placeholder="Localidad"></input>
            <input className="w-20 mt-1 rounded" placeholder="Barrio"></input><br></br><br></br>
            
            <fieldset 
              style={{
                alignSelf: "18px",
                width: "fit-content",
                margin: "auto",
                textAlign: "center",
              }}>
              <legend style={{ fontSize: "18px"}}>Horario</legend>
              <input type="checkbox" id="Monday" value="Monday"></input>
              <label> Monday</label>
              <input style={{width: "25%"}} type="text"placeholder="Apertura" ></input><input style={{width: "25%"}}  placeholder="Cierre"></input><br></br>
              
              <input type="checkbox" value="Tuesday"></input>
              <label> Tuesday</label>
              <input style={{width: "25%"}} placeholder="Apertura"></input><input style={{width: "25%"}} placeholder="Cierre"></input><br></br>

              <input type="checkbox" value="Wednesday"></input>
              <label> Wednesday</label>
              <input style={{width: "25%"}} placeholder="Apertura" ></input><input style={{width: "25%"}} placeholder="Cierre" ></input><br></br>

              <input type="checkbox" value="Thursday"></input>
              <label> Thursday</label>
              <input style={{width: "25%"}} placeholder="Apertura"></input><input style={{width: "25%"}} placeholder="Cierre"></input><br></br>
              
              <input type="checkbox" value="Friday"></input>
              <label> Friday</label>
              <input style={{width: "25%"}} placeholder="Apertura"></input><input style={{width: "25%"}} placeholder="Cierre"></input><br></br>

              <input type="checkbox" value="Saturday"></input>
              <label> Saturday</label>
              <input style={{width: "25%"}} placeholder="Apertura"></input><input style={{width: "25%"}} placeholder="Cierre"></input><br></br>

              <input type="checkbox" value="Sunday"></input>
              <label> Sunday</label>
              <input style={{width: "25%"}} placeholder="Apertura"></input><input style={{width: "25%"}} placeholder="Cierre"></input><br></br>
            </fieldset>

            <br></br><label for="rname">Menu</label><br></br>
            <input type="file" id="menu" name="menu" accept=".pdf"></input>
            
          </form>
          <button className="mt-5 border-0 rounded py-2 px-3 text-white" style={{background: "#6A1818"}}>
            Agregar
          </button>
        </div>
      </div>
    );
   }
   
   export default CreateChain;