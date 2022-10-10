const Footer = () => {
  const style={
    color: "#fff",
    fontFamily: "Source Sans Pro",
  }
  return (
    <footer className="text-center text-white" style={style}>
      <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        © 2022 Copyright:
        <a className="text-dark" href="https://apextechnology.com/">ApexTechnology</a>
        <h6>Singapore 679135</h6>
        <h6>+65 60899210</h6>
        <h6>apextechnology@mymail.com</h6>
      </div>
    </footer>
  )}

  export default Footer