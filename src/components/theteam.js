import { useEffect } from "react"

const PersonDisplay = ({person}) => {
  return(
    <div className="person">
      <img className="circular--square" src="avatar.png" alt="Avatar" style={{color:"black"}}></img>
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

  const paintFunc = (c) => {
    var ctx = c.getContext("2d")

    //making the canvas full screen
    c.height = window.innerHeight / 4
    c.width = window.innerWidth

    //chinese characters - taken from the unicode charset
    var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}"
    //converting the string into an array of single characters
    matrix = matrix.split("")

    var font_size = 10;
    var columns = c.width/font_size //number of columns for the rain
    //an array of drops - one per column
    var drops = []
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for(var x = 0; x < columns; x++)
        drops[x] = 1;

    //drawing the characters
    function draw()
    {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)"
        ctx.fillRect(0, 0, c.width, c.height)

        ctx.fillStyle = "#008000"//green text
        ctx.font = font_size + "px arial"
        //looping over drops
        for(var i = 0; i < drops.length; i++)
        {
            //a random chinese character to print
            var text = matrix[Math.floor(Math.random()*matrix.length)]
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i*font_size, drops[i]*font_size)

            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if(drops[i]*font_size > c.height && Math.random() > 0.975)
                drops[i] = 0

            //incrementing Y coordinate
            drops[i]++
        }
    }

    setInterval(draw, 35);
  }

  useEffect(() => {
    var c = document.getElementById("leftCanvas")
    paintFunc(c)
  }, [])

  return (
    <div>
      <canvas id="leftCanvas"></canvas>
      <div className="TheTeam">
          {persons.map((ea, i) => 
            <PersonDisplay person={ea} key={i}/>
          )}
      </div>
    </div>
  )
}

export default TheTeam