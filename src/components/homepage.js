import { useState, useEffect } from 'react'
import AnnouncementsService from "../services/announcements"
import ProjectsServices from '../services/projects'

const TopContainer = () =>{
  const style={
    backgroundColor: "#454545",
    color: "#fff",
    fontFamily: "Source Sans Pro",
    paddingTop: "90px",
    paddingBottom: "90px",
  }

  const headerStyle={
    fontSize: "70px",
    fontWeight: "700",
  }

  return (
    <div className="container-fluid text-center" style={style}>
      <h1 style={headerStyle}>Leading Websolution Provider</h1>
      <h5>At apex technology, we seek to create the next generation of dynamic website designs.</h5>
      <h5>Create the future with us.</h5>
    </div>
  )
}

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([])

  // get the announcements from server at the start
  useEffect(() => {
    AnnouncementsService.getAll().then(res => {
      setAnnouncements(res.data)
      console.log(res.data)
    })
  }, [])

  return (
    <div className="announcement-container">
      <h1>Announcements</h1>
      <div className="center-col">
        {announcements.map((item, i) => (<h3 className="recent-project-item" key={`item_${i}`}>{ item.title }</h3>))}
      </div>
    </div>
  )
}

const Solutions = () => {
  return (
    <div className="service-container">
      <h1>Services</h1>
      <div className="carouselContainer">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h3>Websites</h3>
            <img className="d-block w-100" src="websiteapp.png" alt="First slide"  height="400px" width="640px"/>
          </div>
          <div className="carousel-item">
            <h3>Mobile Application</h3>
            <img className="d-block w-100" src="mobileapp.png" alt="Second slide"  height="400px" width="640px"/>
          </div>
          <div className="carousel-item">
            <h3>Customized Software</h3>
            <img className="d-block w-100" src="softwareapp.png" alt="Third slide"  height="400px" width="640px"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    </div>
  )
}

const RecentProjects = () => {
  const [projects, setProjects] = useState([])

  // get the announcements from server at the start
  useEffect(() => {
    ProjectsServices.getAll().then(res => {
      setProjects(res.data)
      console.log(res.data)
    })
  }, [])

  return (
    <div className="announcement-container">
      <h1>Projects</h1>
      <div className="center-col">
          {projects.map((item, i) => (<h3 className="recent-project-item" key={`item_${i}`}>{ item.title }</h3>))}
      </div>
    </div>
  )
}

const WeProvideTheBest = () => {
  const bottomstyle = {
    textAlign:"center",
    paddingTop: "70px",
    paddingBottom: "70px"
  }
  return (
    <div style={bottomstyle}>
        <h4><strong>We work round the clock so that you don't have to.</strong></h4>
        <div>
          <img  src="programmers.png" width="300" height="auto"></img>
        </div>
    </div>
  )
}

const Homepage = () => {
  return (
    <div>
      <TopContainer />
      <WeProvideTheBest />
      <Announcement />
      <RecentProjects />
      <Solutions />
    </div>
  )
}

export default Homepage