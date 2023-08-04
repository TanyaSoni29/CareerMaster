import React, { useState } from 'react';

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobLocation, setJobLocation] = useState('');

  const handleJobSubmit = (event) => {
    event.preventDefault();

    setJobTitle('');
    setJobDescription('');
    setJobLocation('');
  };

  return (
    <div className='start'>
    <div className='post'>
      <h2>Post a Job</h2>
      <form onSubmit={handleJobSubmit} className='post-form'>
        <div>
          <label>Job Title:</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Job Description:</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Job Location:</label>
          <input
            type="text"
            value={jobLocation}
            onChange={(e) => setJobLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Post Job</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default PostJob;

