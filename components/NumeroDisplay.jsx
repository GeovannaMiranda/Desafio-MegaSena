export default function NumeroDisplay(props){
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
            width: "100px",
            borderRadius: "100px",
            backgroundColor: "#222",
            color: "#fff",
            fontSize: "4rem",
            margin: "20px"
        }} >
            {props.numero}
        </div>
    )
}