const SplitScreen= ({left, right, shadeLeft}) => {
  const bottomStyle={
    width: "49.99999%",
    flex: "50%",
    padding: "20px",
    fontFamily: "Source Sans Pro",
    paddingTop: "90px",
    paddingBottom: "90px",
    marginTop: "100px",
    margin: "20px",
    textAlign: "center"
  }

  const leftStyle = shadeLeft? {...bottomStyle, backgroundColor:"#e9e9e9", color:"#000"}:bottomStyle
  const rightStyle = shadeLeft? bottomStyle:{...bottomStyle, backgroundColor:"#e9e9e9", color:"#000"}
  
  return (
    <div style={{display:"flex"}}>
      <div style={leftStyle}>
        <h4><strong>{left}</strong></h4>     
      </div>
      <div style={rightStyle}>
        <h4><strong>{right}</strong></h4>     
      </div>
    </div>
  )
}


const AboutUs = () => {
  const style = {
    backgroundColor: "#454545",
    color: "#fff",
    textAlign: "center"
  }
  return (
    <div style={style}>
      <div class="container-fluid">
        <h2>About us</h2>
        <h4>Apex technology aims to provide dynamic web solutions to our clients,</h4>
        <h4>enabling them to utilize the internet for the next stage of growth.</h4>       
      </div>
      <SplitScreen left="MISSION" right="Providing efficient web solutions for clients." shadeLeft={true}/>
      <SplitScreen left="Helping clients to improve their productivity and outreach." right="VISION" shadeLeft={false}/>
    </div>
  )
}

export default AboutUs