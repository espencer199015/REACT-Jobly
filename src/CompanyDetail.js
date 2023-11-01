import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api';

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function fetchCompany() {
      const response = await JoblyApi.getCompany(handle);
      setCompany(response);
    }
    fetchCompany();
  }, [handle]);

  return (
    <div>
      {company ? (
        <div>
          <h1>{company.name}</h1>
          <p>{company.description}</p>
          {/* Display more company details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CompanyDetail;