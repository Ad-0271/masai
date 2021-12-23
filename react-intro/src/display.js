function Display({ heading, content }) {
  return (
    <div>
      <h1> Mobile {heading}</h1>
      <ul>
        {content.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default Display;
