const Message = ({ message, responseStatus }) => {
  if (responseStatus === "success") {
    return <div className="success">{message}</div>;
  } else if (responseStatus === "error") {
    return <div className="error">{message}</div>;
  } else {
    return null;
  }
};

export default Message;
