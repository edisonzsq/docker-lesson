import {useState, useEffect} from "react";

function App() {

  const [employees, setEmployees] = useState([])

  useEffect(()=>{
    fetchEmployees()
  }, [])

  function fetchEmployees(){
    fetch("http://localhost:8008/employees").then(res => res.json()).then(data => setEmployees(data))   
  }

  function DisplayEmployees() {
      
    return employees.map((emp,i) => {
      return(
        <ul key={i}>{emp.name} ({emp.jobTitle}) - S${emp.income}</ul>
      )
    })
    
  }

  return (
    <div>
      <h1>Employees Data</h1>
      <ul>
        {employees.length > 0 ? <DisplayEmployees></DisplayEmployees> : <div>No data yet. Please see readme.md file on how to create data.</div>}
      </ul>
    </div>
  );
}

export default App;
