import { useState } from "react";
import { FormattedMessage } from "react-intl";
import BackgroundDots from "./BackgroundDots";

function CreateChain() {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const chainInfo = {
      chainName: inputs.cname,
    }

    fetch("http://localhost:3000/api/v1/chains", {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(chainInfo)
    })

    const restInfo = {
      description: inputs.description,
    }

    fetch("http://localhost:3000/api/v1/sites", {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(restInfo)
    })
  }

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
        <form onSubmit={handleSubmit}>
        <label for="cname">
          <FormattedMessage id="ChainName"/>
        </label><br></br>
          <input 
            type="text" 
            name="cname" 
            className="w-100 mt-1 rounded"
            value={inputs.cname || ""}
            onChange={handleChange}>
          
          </input><br></br><br></br> 
          <div
            className="d-flex flex-column justify-content-center align-items-center pb-4"
            style={{ backgroundColor: "#ffdd86" }}
          >
            <h3 className="m-0 mt-4" style={{ fontSize: "20px" }}>
              <FormattedMessage id="CreateRestaurant"/>
            </h3>
          </div><br></br>

          <label for="description">
            <FormattedMessage id="Description"/>
          </label><br></br>
          <input 
            type="text" 
            name="description" 
            className="w-100 mt-1 rounded"
            value={inputs.description || ""}
            onChange={handleChange}>
          </input><br></br><br></br>

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
          
          <br></br>

          <FormattedMessage id="Create">{value=>  
            <input 
              className="mt-5 border-0 rounded py-2 px-3 text-white" 
              type="submit" 
              value={value}
              style={{background: "#6A1818"}}>
            </input>}
          </FormattedMessage>
        </form>
      </div>
    </div>
  );
}
   
export default CreateChain;