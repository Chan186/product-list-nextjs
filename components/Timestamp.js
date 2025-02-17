import { format } from 'date-fns';

const Timestamp = ({ currentTimestamp }) => {
  const formattedTimestamp = format(new Date(currentTimestamp), 'dd-MM-yyyy hh:mm:ss a');

  return (
    <>
      <p>Current timestamp: {formattedTimestamp}</p>
    </>
  );
};

export default Timestamp;
