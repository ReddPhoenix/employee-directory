import useSortableData from './Sort';
import React, { useState } from "react";


const Employee = (props) => {
    const [value, setValue] = useState("");
    const { employees, requestSort, sortConfig } = useSortableData(props.employees);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <input
                            type="text"
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
                    </th>
                </tr>
                <tr>
                    <th>
                        {/* sort by first name button */}
                        <button
                            type="button"
                            onClick={() => requestSort('first_name')}
                            className={getClassNamesFor('first_name')}
                        >First Name</button>
                    </th>

                    {/* sort by last name button */}
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('last_name')}
                            className={getClassNamesFor('last_name')}
                        >Last Name</button>
                    </th>

                    {/* sort by job title button */}
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('title')}
                            className={getClassNamesFor('title')}
                        >Title</button>
                    </th>

                    {/* sort by employee email button */}
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('email')}
                            className={getClassNamesFor('email')}
                        >Email</button>
                    </th>

                    {/* sort by employee phone button */}
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('phone')}
                            className={getClassNamesFor('phone')}
                        >Phone Number</button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {/* map employee list and display */}
                {employees.filter(item => {
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
                    .map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.first_name}</td>
                            <td>{emp.last_name}</td>
                            <td>{emp.title}</td>
                            <td>{emp.email}</td>
                            <td>{emp.phone}</td>
                        </tr>


                    ))}
            </tbody>
        </table>
    );
};

export default Employee;