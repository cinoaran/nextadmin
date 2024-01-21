const Status = (props) => {
  const status = props.status.toLowerCase();
  return (
    <>
      <span className={status}></span>
    </>
  );
};

export default Status;
