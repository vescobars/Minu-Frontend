const OrderCard = (props) => {
    return (
        <div class="card"
            style={{
                height: "120px",
                float: "left",
                borderStyle: "groove",
                borderRadius: "8px",
                marginLeft: "8px",
                width: "150px",
            }}>
        <h3>
          <a href="/report">Orden {props.id}</a>
        </h3>
        <p style={{color:"rgb(91, 141, 17)"}}>{props.state}</p>
        <p>{props.date}</p>
      </div>
    );
  };
  
  export default OrderCard;