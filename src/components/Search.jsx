
import React, { useState } from 'react';

export default function Search() {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Software Engineer', level: 'Mid-Senior', function: 'IT', employment: 'Full Time', location: 'In Office', education: "Bachelor's Degree" },
    { id: 2, title: 'Product Manager', level: 'Director', function: 'Management', employment: 'Full Time', location: 'Remote', education: "Master's Degree" },
    { id: 2, title: 'Software Engineer', level: 'Entry', function: 'IT', employment: 'Part Time', location: 'Work From Home', education: "Bachelor's Degree" },
    { id: 2, title: 'Software Engineer', level: 'Mid-Senior', function: 'IT', employment: 'Part Time', location: 'Remote', education: "Bachelor's Degree" },
    { id: 2, title: 'Product Manager', level: 'Mid-Senior', function: 'Management', employment: 'Part Time', location: 'In Office', education: "Master's Degree" },
    { id: 2, title: 'Assistent Professor', level: 'Mid-Senior', function: 'Education', employment: 'Full Time', location: 'In Office', education: "Master's Degree" },
  ]);

  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleFilterChange = (event) => {
    const { id, value } = event.target;
    let filtered;
  
    if (value === '') {
      filtered = jobs; 
    } else {
      filtered = jobs.filter(job =>
        (id === 'job-level' && job.level === value) ||
        (id === 'job-function' && job.function === value) ||
        (id === 'employment' && job.employment === value) ||
        (id === 'location' && job.location === value) ||
        (id === 'education' && job.education === value)
      );
    }
  
    setFilteredJobs(filtered);
  };
 

  return (
    <div className='start'>
       <div className='filter-box'>
        <div className='filter-dropdown'>
          <select className='filter-select' id='job-level' name='job-level' onChange={handleFilterChange}>
            <option value="">Job Level</option>
            <option value="Entry">Entry</option>
            <option value="Mid-Senior">Mid-Senior</option>
            <option value="Director">Director</option>
          </select>
          <select className='filter-select' id='job-function' name='job-function' onChange={handleFilterChange}>
            <option value="">Job Function</option>
            <option value="IT">IT</option>
            <option value="Management">Management</option>
            <option value="Education">Education</option>
          </select>
          <select className='filter-select' id='employment' name='employment' onChange={handleFilterChange}>
            <option value="">Employment Type</option>
            <option value="Internship">Internship</option>
            <option value="Part Time">Part Time</option>
            <option value="Full Time">Full Time</option>
          </select>
          <select className='filter-select' id='location' name='location' onChange={handleFilterChange}>
            <option value="">Location</option>
            <option value="Work From Home">Work From Home</option>
            <option value="In Office">In Office</option>
            <option value="Remote">Remote</option>
          </select>
          <select className='filter-select' id='education' name='education' onChange={handleFilterChange}>
            <option value="">Education</option>
            <option value="High School">High School</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
          </select>
        </div>
      </div>

      <div className="job-list">
        {filteredJobs.map(job => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p>Job Level: {job.level}</p>
            <p>Function: {job.function}</p>
            <p>Employment: {job.employment}</p>
            <p>Location: {job.location}</p>
            <p>Education: {job.education}</p>
            <button type='submit' className='btn btn-primary rounded-4 apply'>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}
