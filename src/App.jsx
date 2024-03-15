function App() {
  return (
    <>
      <header className="absolute left-1/2 top-10 flex w-[40rem] max-w-[80%] -translate-x-1/2 justify-between rounded-lg border p-4">
        <div className="text-xs">
          <h1>Rock</h1>
          <h1>paper</h1>
          <h1>scissors</h1>
        </div>
        <div className="flex flex-col items-center justify-center rounded-md bg-white px-8">
          <span className="text-xs text-blue-500">Score</span>
          <span className="text-4xl font-bold text-gray-600">12</span>
        </div>
      </header>
      <main></main>
      <button className="uppercase">Rules</button>
    </>
  );
}

export default App;
