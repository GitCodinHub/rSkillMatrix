import handleProjectSubmit from "../App.jsx"
export default function MainSelector({ handleProjectSubmit, project, setProject, showSkillPrompt }){

    return(
        <section className="Main-Section">
            <h1>What project are you planning?</h1>
            <input className="Project-Input" 
            placeholder="Project"
              value={project}
            onChange={(e) => setProject(e.target.value)}
            onKeyDown={handleProjectSubmit}></input>



        </section>
    )
}