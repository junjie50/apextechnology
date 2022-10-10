const PersonDisplay = ({person}) => {
  return(
    <div className="person">
      <img class="circular--square" src="construction.png" alt="Avatar" style={{color:"black"}}></img>
      <h1>{person.name}</h1>
      <h3>{person.title}</h3>
      <h5>{person.message}</h5>
    </div>
  )
}


const TheTeam = () => {
  const persons = [
    {name: "Jonathan Wong",
    title: "Founder/CEO",
    message: "I am thankful for the opportunity to be leading this team. We started with a team of 3 and has since grown in size.",
    },
    {name: "Jason Tan",
    title: "Co-Founder",
    message: "We seek to create the most innovative solutions at Apex technology. ",
    },
    {name: "James Leong",
    title: "CTO",
    message: "We strive to be ahead of the industry in terms of technology adoption. We test the newly released systems ourselves so that you do not have to."
    }
  ]
 
  return (
    <div className="TheTeam">
      {persons.map((ea, i) => 
        <PersonDisplay person={ea} key={i}/>
      )}
    </div>
  )
}

export default TheTeam