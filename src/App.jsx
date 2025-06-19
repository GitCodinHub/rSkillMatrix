

import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import MainSelector from './components/MainSelector'





export default  function App(){
  const [employees, setEmployees] = useState([])
  const [project, setProject] = useState("");
const [showSkillPrompt, setShowSkillPrompt] = useState(false);
const [requiredSkills, setRequiredSkills] = useState("")



useEffect(() => {
  fetch('http://localhost:8000/api/employees')
  .then(res => res.json())
  .then(data => {
    console.log("Fetched employees:", data);
    setEmployees(data);
  })
  
  .catch(err => console.error("error reaching the api", err))
} , [])

const allSkills = [...new Set(employees.flatMap(emp => emp.skills))]


  const handleProjectSubmit = (e) => {
    // If it's a key event, check for "Enter"
    if (e.key && e.key !== "Enter") return
  
    if (project.trim() !== "") {
      setShowSkillPrompt(true);
      setRequiredSkills("")
    }
  }
  
  return(
  
  <div>
   
    < Navbar /> 
    <h1 className='Welcome'> Welcome to the Resource Skill Matrix</h1>
     
     {
  showSkillPrompt ? (
    <div className='skill-Prompt'>
      <h2>What skills are needed?</h2>
      <input className = "skill-Input"
       type="text" 
       value = {requiredSkills}
       onChange={(e) => setRequiredSkills(e.target.value)}
       placeholder="e.g. React, Node.js" />
   
    {/* ✅ Skill Matrix Table */}
<div className='table-wrapper'> <table border="1"  cellPadding="20" className='skill-table'>
  <thead>
    <tr>
      <th>Skills ↓ / Employees →</th>
      {employees.map(emp => {
        // Filter if requiredSkills is typed and the employee doesn't match
        const matches = requiredSkills.toLowerCase().split(',').map(s => s.trim());
        const hasSkill = emp.skills.some(skill => matches.includes(skill.toLowerCase()));
        if (requiredSkills.trim() && !hasSkill) return null;

        return <th key={emp.name}>{emp.name}</th>;
      })}
    </tr>
  </thead>
  <tbody>
    {allSkills.map(skill => (
      <tr key={skill}>
        <td><strong>{skill}</strong></td>
        {employees.map(emp => {
          const matches = requiredSkills.toLowerCase().split(',').map(s => s.trim());
          const shouldShow = !requiredSkills.trim() || emp.skills.some(s => matches.includes(s.toLowerCase()));
          if (!shouldShow) return null;

          const hasSkill = emp.skills.includes(skill);
          const isMatch = matches.includes(skill.toLowerCase());

          return (
            <td
              key={emp.name + skill}
              style={{
                backgroundColor: hasSkill && isMatch ? 'lightgreen' : hasSkill ? '#eee' : 'white',
                textAlign: 'center'
              }}
            >
              {hasSkill ? "✔" : ""}
            </td>
          );
        })}
      </tr>
    ))}
  </tbody>
</table> </div>
    

    
    </div>
  ) : (
    <MainSelector
      handleProjectSubmit={handleProjectSubmit}
      project={project}
      setProject={setProject}
      
    />
  
  )
     }
     </div>

  )
    }
