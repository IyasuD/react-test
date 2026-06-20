import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-blue-600 dark:text-sky-400 border-2 p-4 rounded-xl">
        Learn react with liyutech.org
      </h1>
      <p>Seek wisdom, Elevate your intellect and serve humanity.</p>
      <div className="max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow">
        <img
          className="w-full h-48 object-cover"
          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sample image"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Fundamentals of React
          </h2>
          <p className="mt-2 text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            iste cum repellendus, maiores quasi expedita?
          </p>
          <button className="mt-4 px-4 bg-blue-600 rounded-lg text-white py-2 hover:bg-blue-700">
            Learn Now
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
