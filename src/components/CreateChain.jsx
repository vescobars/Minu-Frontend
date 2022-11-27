import { FormattedMessage } from "react-intl";
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
            <FormattedMessage id="CreateChain"/>
          </h3>
        </div>
        <div className="w-100 d-flex flex-column justify-content-center align-items-center py-5 position-relative">
          <BackgroundDots className="top-0 end-0" />
          <BackgroundDots className="bottom-0 start-0" />
          <form>
          <label for="rname">
            <FormattedMessage id="ChainName"/>
          </label><br></br>
            <input type="text" name="rname" className="w-100 mt-1 rounded"></input><br></br><br></br>

            <label for="rname">
              <FormattedMessage id="RestaurantName"/>
            </label><br></br>
            <input type="text" name="rname" className="w-100 mt-1 rounded"></input><br></br><br></br>

            <label for="descripcion">
              <FormattedMessage id="Description"/>
            </label><br></br>
            <input type="text" name="descripcion" className="w-100 mt-1 rounded"></input><br></br><br></br>

            <label for="direccion">
              <FormattedMessage id="Address"/>
            </label><br></br>
            <FormattedMessage id="Address">{placeholder=>  
              <input className="w-20 mt-1 rounded" placeholder={placeholder}/>}
            </FormattedMessage>
            <FormattedMessage id="City">{placeholder=>  
              <input className="w-20 mt-1 rounded" placeholder={placeholder}/>}
            </FormattedMessage>
            <FormattedMessage id="Location">{placeholder=>  
              <input className="w-20 mt-1 rounded" placeholder={placeholder}/>}
            </FormattedMessage>
            <FormattedMessage id="Neighborhood">{placeholder=>  
              <input className="w-20 mt-1 rounded" placeholder={placeholder}/>}
            </FormattedMessage>
            <br></br><br></br>
            
            <fieldset 
              style={{
                alignSelf: "18px",
                width: "fit-content",
                margin: "auto",
                textAlign: "center",
              }}>
              <legend style={{ fontSize: "16px"}}>
                <FormattedMessage id="Schedule"/>
              </legend>
              <input type="checkbox" id="Monday" value="Monday"></input>
              <label>
                <FormattedMessage id="Monday"/>
              </label>
              <FormattedMessage id="Opening">{placeholder=>  
                    <input style={{width: "25%"}} placeholder={placeholder}/>}
              </FormattedMessage>
              <FormattedMessage id="Closing">{placeholder=>  
                    <input style={{width: "25%"}} placeholder={placeholder}/>}
              </FormattedMessage><br></br>
              <input type="checkbox" value="Tuesday"></input>
              <label> 
                <FormattedMessage id="Tuesday"/>
              </label>
              <FormattedMessage id="Opening">{placeholder=>  
                    <input style={{width: "25%"}} placeholder={placeholder}/>}
              </FormattedMessage>
              <FormattedMessage id="Closing">{placeholder=>  
                    <input style={{width: "25%"}} placeholder={placeholder}/>}
              </FormattedMessage><br></br>

              <input type="checkbox" value="Wednesday"></input>
              <label>
                <FormattedMessage id="Wednesday"/>
              </label>
              <FormattedMessage id="Opening">{placeholder=>  
                    <input style={{width: "25%"}} placeholder={placeholder}/>}
              </FormattedMessage>
              <FormattedMessage id="Closing">{placeholder=>  
                    <input style={{width: "25%"}} placeholder={placeholder}/>}
              </FormattedMessage><br></br>

              <input type="checkbox" value="Thursday"></input>
              <label>
                <FormattedMessage id="Thursday"/>
              </label>
              <FormattedMessage id="Opening">{placeholder=>  
                    <input style={{width: "25%"}} placeholder={placeholder}/>}
              </FormattedMessage>
              <FormattedMessage id="Closing">{placeholder=>  
                    <input style={{width: "25%"}} placeholder={placeholder}/>}
              </FormattedMessage><br></br>
              
              <input type="checkbox" value="Friday"></input>
              <label>
                <FormattedMessage id="Friday"/>
              </label>
              <FormattedMessage id="Opening">{placeholder=>  
                    <input style={{width: "25%"}} placeholder={placeholder}/>}
              </FormattedMessage>
              <FormattedMessage id="Closing">{placeholder=>  
                    <input style={{width: "25%"}} placeholder={placeholder}/>}
              </FormattedMessage><br></br>

              <input type="checkbox" value="Saturday"></input>
              <label>
                <FormattedMessage id="Saturday"/>
              </label>
              <FormattedMessage id="Opening">{placeholder=>  
                    <input style={{width: "25%"}} placeholder={placeholder}/>}
              </FormattedMessage>
              <FormattedMessage id="Closing">{placeholder=>  
                    <input style={{width: "25%"}} placeholder={placeholder}/>}
              </FormattedMessage><br></br>

              <input type="checkbox" value="Sunday"></input>
              <label>
                <FormattedMessage id="Sunday"/>
              </label>
              <FormattedMessage id="Opening">{placeholder=>  
                    <input style={{width: "25%"}} placeholder={placeholder}/>}
              </FormattedMessage>
              <FormattedMessage id="Closing">{placeholder=>  
                    <input style={{width: "25%"}} placeholder={placeholder}/>}
              </FormattedMessage><br></br>
            </fieldset>

            <br></br><label for="rname">Menu</label><br></br>
            <input type="file" id="menu" name="menu" accept=".pdf"></input>
            
          </form>
          <button className="mt-5 border-0 rounded py-2 px-3 text-white" style={{background: "#6A1818"}}>
            <FormattedMessage id="Create"/>
          </button>
        </div>
      </div>
    );
   }
   
   export default CreateChain;