export const NewButtom = ({ children }) => {
  const handleClick = () => {
    alert("clicked");
  };

  return (
    <button className="error" onClick={handleClick}>
      {children}
    </button>
  );
};
