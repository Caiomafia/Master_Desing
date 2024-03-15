

export default function Home() {
  return (
    <main> 
      <header className=" bg-red-600 flex flex-row justify-center  items-center pt-2 pb-2 sm:w-full h-full">
         <h1 className=" font-bold mr-4 font-title-timer sm:text-xs ">OFERTA DISPONÍVEL ATÉ:</h1>
         <div className=" flex flex-row ">
                <div className= " mr-3 bg-white text-black border w-16 h-14   rounded-xl sm: w-9 h-15 ">
                  <h3 className="text-center flex flex-col  font-light">00 <span>Dias</span></h3>
                </div>
                <div className=" mr-3 bg-white text-black border w-16 h-14   rounded-xl  sm: w-9 h-15">
                  <h3 className="text-center flex flex-col  font-light">00 <span>Hrs</span></h3>
                </div>
                <div className= " mr-3 bg-white text-black border w-16 h-14   rounded-xl  sm: w-9 h-15">
                  <h3 className="text-center flex flex-col  font-light">00 <span>Min</span></h3>
                </div>
                <div className="mr-3 bg-white text-black border w-16 h-14   rounded-xl sm: w-9 h-15">
                  <h3 className="text-center flex flex-col  font-light">00 <span>Seg</span></h3>
                </div>
                
                
          </div>
            
        
      </header>
    </main>
  );
}
