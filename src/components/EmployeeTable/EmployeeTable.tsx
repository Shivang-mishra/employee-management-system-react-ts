import type { Employee } from "../../types/employee";
interface EmployeeTableProps{
    employees:Employee[]
}
function EmployeeTable({employees}:EmployeeTableProps ){
    return(
        <div>
            <h2>Employee Table</h2>

            {employees.map((employee)=>(
                <div key={employee.id}>
                    <h3>{employee.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default EmployeeTable