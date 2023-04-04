import { MDBIcon } from "mdb-react-ui-kit";
import { useEffect } from "react";


    const [savedJobs, setSavedJobs] = useState([]); //identifies the user who's logged in and associates them with job they're interested in
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.id;
    
    const Job = ({ job, userId, updatedSavedJobs }) => {
        const [savedJobs, setSavedJobs] = useState([]);

        useEffect(() => {
            updateSavedJobs(userId, job.id);
        }, [savedJobs]);

        return (
            <div>
                <MDBIcon
                far
                icon="heart"
                onClick={() => setSavedJobs((prevSavedJobs) => [...prevSavedJobs, job])}
                ></MDBIcon>
            <h3>{job.title}</h3>
            <p>{job.bulletpoints}</p>
            </div>
        );
    };

    const updateSavedJobs = async (userId, jobId) => {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      try {
        const response = await axios.post('http://localhost:8081/api/favourites/addfavourite', { user_id: userId, job_id: job.adId }, config);
        console.log(response.data); 
      } catch (error) {
        console.error(error);
      }
    };
    
    const handleJobClick = (jobId) => {
      const userId = localStorage.getItem('user_id');
      updateSavedJobs(userId, jobId);
    }
    


