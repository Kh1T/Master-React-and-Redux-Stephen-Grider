function App() {
  const num = 19;
  const name = "Khit";
  const date = new Date();
  const time = date.toLocaleTimeString();
  return (
    <div className="grid">
      <h1 className="text-2xl font-bold">Hi there! I'm {name}!</h1>
      {/* <h3>{date}</h3> */}
      <p className="bg-blue-400">It's {time}</p>
      <input className="border-black" type="number" placeholder="input" />
      <textarea autoFocus={true}></textarea>
    </div>
  );
}

export default App;