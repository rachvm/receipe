function App() {
  return (
    <div className="min-h-screen pb-20">
      <header className="pl-10 pt-10 mb-10 font-sans font-extrabold text-cyan-500 text-5xl">CalcCook</header>
      <div className="bg-cyan-400/10 rounded-xl justify-center mx-10 md:mx-20 min-h-screen pb-20">
        <div className="flex place-items-center justify-center">
          <button className="bg-cyan-500 hover:bg-black font-extrabold text-white my-10 px-2 py-5 text-3xl rounded-2xl">Convert</button>
        </div>
        <form className="mx-5 md:mx-20 min-h-screen pb-20">
          <div className="mx-10 pt-2 md:pt-24 md:mx-28 h-full flex items-center md:justify-end">
            <label className="text-3xl font-sans font-medium pr-5">Servings</label>
            <input className="h-10 w-14 mt-5"></input>
          </div>
          <div className="mx-10 pt-2 md:pt-24 md:mx-28 h-full">
            <label className="text-3xl font-sans font-medium pr-5">Reciepe Name</label>
            <input className="h-10 w-full mt-5"></input>
          </div>
          <div className="mx-10 md:mx-28 pt-24 md:min-h-screen pb-20">
            <header className="text-3xl font-sans font-medium pr-5">Ingredients</header>
            <textarea className="w-full mt-5 h-5/6 md:min-h-screen pb-20"></textarea>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default App;

//Plan
//enter in a recieppe box the measurement and the number of servings of the reciepe