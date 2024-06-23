
import "./project.css"
import ProjectCard from "./ProjectCard"
import viberr from "../../assets/viberr.png"
import freshBurger from "../../assets/fresh-burger.png"
import hipsster from "../../assets/hipsster.png"
import fitLift from "../../assets/fitlift.png"


const Project = () => {
  return (
    <section id="projects" className="container">
      <h1 className="sectionTitle">Projects</h1>
      <div className="projectsContainer">

        <ProjectCard
         className="card"
         src={viberr}
          link="https://66772f9070b58fdfd89eb391--startling-sawine-7f7008.netlify.app/"
          h3="U-Tube"
          p="U tube Frontend part"
        />

         <ProjectCard
          src={freshBurger}
          link="https://6675cfda076d6ed890666700--gentle-belekoy-91034d.netlify.app/"
          h3="Food ordering "
          p="A food ordering web"
        />
        <ProjectCard
          src={hipsster}
          link="https://66773453ff107bdc633e507f--calm-madeleine-dc1d99.netlify.app/"
          h3="Netflix home"
          p="Netflix home page"
         
        />
        <ProjectCard
          src={fitLift}
          link="https://66782615543aae9202ed73ad--lucent-treacle-a45b71.netlify.app/"
          h3="Password Generator"
          p="A random password generator"
        />
       
     
      
      </div>
    </section>
  )
}

export default Project