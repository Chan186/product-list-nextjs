import { format } from 'date-fns';

const Timestamp = () => {
  const currentTimestamp = new Date();
  const formattedTimestamp = format(currentTimestamp, 'dd-MM-yyyy hh:mm:ss a');

  return (
    <>
      <p>Current timestamp: {formattedTimestamp}</p>
    </>
  );
};

export default Timestamp;



