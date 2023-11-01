import React, { useState, useEffect } from 'react';
import JoblyApi from '../api'; // Import your API module

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchCompanies() {
      const response = await JoblyApi.getCompanies(); // Replace with your API call
      setCompanies(response);
    }
    fetchCompanies();
  }, []);

  return (
    <div>
      <h1>Companies</h1>
      <ul>
        {companies.map(company => (
          <li key={company.handle}>{company.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyList;