const Section =(props)=>{
  return(
    <div className="section" id={props.id}>
      {props.children}
    </div>
)}

export default Section;