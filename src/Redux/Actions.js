
export const FETCH_JOBS = 'FETCH_JOBS';

export const fetchJobs = () => {
  return {
    type: FETCH_JOBS,
    payload: [
      { title: 'FULLSTACK Developer', location: 'Bangalore', experience: '3 Years' },
      { title: 'Frontend Developer', location: 'Bangalore', experience: '1 Years' },
      { title: 'Java Developer', location: 'Bangalore', experience: '2 Years' },
      { title: 'Backend Developer', location: 'Bangalore', experience: '1.5 Years' },
      { title: 'MERNSTACK Developer', location: 'Bangalore', experience: '3 Years' },
      { title: 'Node js Developer', location: 'Bangalore', experience: '1 Years' },
      { title: 'Oracle Developer', location: 'Bangalore', experience: '2 Years' },
      { title: 'Devops Engineer', location: 'Bangalore', experience: '1.5 Years' }
    ]
  };
};
