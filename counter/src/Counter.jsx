function Counter({ count, changeCount, doubleCount }) {
  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          changeCount(1);
        }}
      >
        Add
      </button>
      <button
        onClick={
          count > 0
            ? () => {
                changeCount(-1);
              }
            : null
        }
      >
        Delete
      </button>
      <div>
        <button
          onClick={() => {
            doubleCount();
          }}
        >
          Double
        </button>
      </div>
    </div>
  );
}
export { Counter };
