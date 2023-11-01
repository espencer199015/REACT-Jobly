import React, { useState, useEffect } from 'react';
import JoblyApi from '../api';

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const response = await JoblyApi.getJobs(); // Replace with your API call
      setJobs(response);
    }
    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.companyName}</p>
            {/* Display more job details here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;