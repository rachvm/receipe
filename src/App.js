import { useState } from 'react';

function App() {
  const [oldList, setOldList] = useState("") //string of ingredients
  const [number, setNumber] = useState([]) //quantities of ingredients
  const [ingredients, setIngredients] = useState([])
  //const [convert, setConvert] = useState([])
  const [final, setFinal] = useState([])
  const [newServing, setNewServing] = useState(0)
  const [oldServing, setOldServing] = useState(0)

  async function handleSplitClick (e) {
    e.preventDefault()
    const splitNumber = (oldList.split(/\r?\n/)).map((item) => (item.replace(/\D+$/g, ""))) 
    const splitIngredients = (oldList.split(/\r?\n/)).map((item) => (item.replace(/[\d]/g, "")))
    setNumber(splitNumber);
    setIngredients(splitIngredients);
  }

  async function handleClick () {
    const convert = ((number.map(Number)).map((item) => (item/oldServing)*newServing))
    const convertedIngredients = (convert.map(String)).map((a, i) => a + ingredients[i])
    setFinal(convertedIngredients)
  }

  return (
    <div className="min-h-screen pb-20">
      <header className="pl-10 pt-10 mb-10 font-sans font-extrabold text-cyan-500 text-5xl">CalcCook</header>
      {final.map((item, i) => (
        <li className="list-none" key={i}>{item}</li>
      ))}
      <div className="bg-cyan-400/10 rounded-xl justify-center mx-10 md:mx-20 min-h-screen pb-20">
        <div className="flex place-items-center justify-center">
          <button className="bg-cyan-500 hover:bg-black font-extrabold text-white mt-20 mb-10 px-10 py-5 text-3xl rounded-2xl" onClick={handleClick}>Convert</button>
        </div>
        <form className="mx-5 md:mx-20 min-h-screen pb-20">
        <div className="mx-10 pt-2 md:pt-24 md:mx-28 h-full flex items-center md:justify-end">
            <label className="text-3xl font-sans font-medium pr-5">Converted Servings</label>
            <input className="h-10 w-14 mt-5" onChange={(e) => setNewServing(e.target.value)}></input>
          </div>
          <div className="mx-10 pt-2 md:pt-24 md:mx-28 h-full flex items-center md:justify-end">
            <label className="text-3xl font-sans font-medium pr-5">Reciepe Servings</label>
            <input className="h-10 w-14 mt-5" onChange={(e) => setOldServing(e.target.value)}></input>
          </div>
          <div className="mx-10 pt-2 md:pt-24 md:mx-28 h-full">
            <label className="text-3xl font-sans font-medium pr-5">Reciepe Name</label>
            <input className="h-10 w-full mt-5"></input>
          </div>
          <div className="mx-10 md:mx-28 pt-24 md:min-h-screen pb-20">
            <header className="text-3xl font-sans font-medium pr-5">Ingredients</header>
            <textarea className="w-full mt-5 h-5/6 md:min-h-screen pb-20" onChange={(e) => setOldList(e.target.value)}></textarea>
            <button className="bg-cyan-500 hover:bg-black font-extrabold text-white mt-20 mb-10 px-10 py-5 text-3xl rounded-2xl" onClick={handleSplitClick}>Save</button>          
          </div>
        </form>
      </div>
      
    </div>
    
  );
}

export default App;

//Plan
//On click display ingredients in a list ✅
//On click display ingrediets for set no servings (hardcoded) in a list ✅
//On click display ingredients for servings inputted in a list ✅
//On click display ingredients on a seperate page 
//On click as above but have ingredients as editable