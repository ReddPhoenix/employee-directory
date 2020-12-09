import React from 'react';
import Header from './components/Header.jsx';
import Filter from './components/Filter.jsx';
import Employee from './components/Employee.jsx';
import employees from './data/Employees.json';

export default function App() {
    return (
        <div>
            <Header />
            {/* <Filter /> */}
            <Employee employees={employees} />
        </div>
    );
}