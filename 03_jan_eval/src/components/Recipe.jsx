export const Recipe = ({ title, time_required }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Time required: {time_required}</p>
    </div>
  );
};
