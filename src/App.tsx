import {useState} from "react";
function App() {
  const [count,setCount] = useState<number>(0);
  const isEven = count % 2 === 0;
  return(
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <p className="text-sm font-medium text-blue-600">
          React-day03
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Counter
        </h1>

        <p className="mt-2 text-sm text-slate-500"> 
        Current count
        </p>

        <p className="my-6 text-7xl font-bold text-slate-900">
          {count}
        </p>

        {count === 10 && (
          <p className="mb-4 font-semibold text-green-600">
            You've reached 10!
          </p>
        )}

        <p className="mb-6 text-sm text-slate-600">
        {isEven? "This number is even." : "This number is odd."}
        </p>

        <div className="grid grid-cols-2 gap-3">
          <button
          onClick={()=> setCount(count+1)}
           className="rounded-lg bg-green-600 px-4 py-3 font-semibold text-white">
            Increase +
          </button>

          <button 
          onClick={()=> setCount(Math.max(0,count-1))}
          disabled={count===0}
          className="rounded-lg bg-rose-600 px-4 py-3 font-semibold text-white">
            Decrease −
          </button>

          <button 
          onClick={()=> setCount(count+5)}
          className="rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white">
            Increase by 5
          </button>

          <button 
          onClick={()=>setCount(0)}
          className="rounded-lg border border-slate-300 px-4 py-3 font-semibold text-slate-700">
            Reset
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;


 