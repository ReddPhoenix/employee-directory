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
        
        <table className='table  is-striped is-hoverable is-fullwidth'>
            <thead>
                <tr>
                    <th>
                        <div className='control has-icons-right'>
                            <input
                                type="text"
                                value={value}
                                onChange={e => setValue(e.target.value)}
                                placeholder='Search...'
                                className='input is-rounded'
                            />
                            <span className='icon is-small is-right'>
                                <i class="fa fa-search"></i>
                            </span>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        {/* sort by first name button */}
                        <div className='has-icons-right'>
                            <button
                                type="button"
                                onClick={() => requestSort('first_name')}
                                className={getClassNamesFor('first_name')}

                            >First Name
                                <span className='icon is-small is-right'>
                                    <i className="fa fa-sort"></i>
                                </span>
                            </button>
                        </div>
                    </th>

                    {/* sort by last name button */}
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('last_name')}
                            className={getClassNamesFor('last_name')}
                        >Last Name
                        <span className='icon is-small is-right'>
                                <i className="fa fa-sort"></i>
                            </span></button>
                    </th>

                    {/* sort by job title button */}
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('title')}
                            className={getClassNamesFor('title')}
                        >Title
                        <span className='icon is-small is-right'>
                                <i className="fa fa-sort"></i>
                            </span></button>
                    </th>

                    {/* sort by employee email button */}
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('email')}
                            className={getClassNamesFor('email')}
                        >Email
                        <span className='icon is-small is-right'>
                                <i className="fa fa-sort"></i>
                            </span></button>
                    </th>

                    {/* sort by employee phone button */}
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('phone')}
                            className={getClassNamesFor('phone')}
                        >Phone Number
                        <span className='icon is-small is-right'>
                                <i className="fa fa-sort"></i>
                            </span></button>
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