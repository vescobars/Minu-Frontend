import Star from "./Star";

const ReviewCard = (props) => {
    const renderStars = () => {
        if (props.score === 1) return (
            <div>
                <Star state="on"/><Star state="off"/><Star state="off"/><Star state="off"/><Star state="off"/>
            </div> 
        )
        else if (props.score === 2) return (
            <div>
                <Star state="on"/><Star state="on"/><Star state="off"/><Star state="off"/><Star state="off"/>
            </div> 
        )
        else if (props.score === 3) return (
            <div>
                <Star state="on"/><Star state="on"/><Star state="on"/><Star state="off"/><Star state="off"/>
            </div> 
        )
        else if (props.score === 4) return (
            <div>
                <Star state="on"/><Star state="on"/><Star state="on"/><Star state="on"/><Star state="off"/>
            </div> 
        )
        else if (props.score === 5) return (
            <div>
                <Star state="on"/><Star state="on"/><Star state="on"/><Star state="on"/><Star state="on"/>
            </div> 
        )
    }

    return (
        
        <div 
            style={{
                height: "175px",
                float: "left",
                borderStyle: "groove",
                borderRadius:"8px",
                marginLeft: "8px",
                overflow: "hidden"
            }}>
            <p 
                style={{
                    fontSize: "25px",
                    margin: "0",
                    marginTop: "8px",
                }}>Nombre Cliente
            </p>
            {renderStars()}
           
            <p style={{width: "300px"}}>
            {props.description}{" "}
            </p>
        </div>
    );
  };
  
  export default ReviewCard;