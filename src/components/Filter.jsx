import React, { useState } from "react";
import employees from '../data/Employees.json';
import Employee from './Employee';


const List = ({ employees }) => {
    const [value, setValue] = useState("");
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            {employees
                .filter(item => {
                  if (!value) return true;
                  // filter employees based on user input across all column headings
                    if (item.title.toLowerCase().includes(value.toLowerCase())
                        || item.first_name.toLowerCase().includes(value.toLowerCase())
                        || item.last_name.toLowerCase().includes(value.toLowerCase())
                        || item.email.toLowerCase().includes(value.toLowerCase())
                        || item.phone.toLowerCase().includes(value.toLowerCase())
                    ) {
                        return true;
                    }
                    return false;
                })
                .map(item => (
                    <tr key={item.id}>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.title}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                ))}
        </div>
    );
};

function Filter() {
    return (
        <div className="Filter">
            <List employees={employees} />
        </div>
    );
}

export default Filter;