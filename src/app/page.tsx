

export default function Home() {
  return (
    <main> 
      <header className=" bg-red-600 flex flex-row justify-center items-center items-center pt-2 pb-2">
         <h1 className=" font-bold mr-4 font-title-timer">OFERTA DISPONÍVEL ATÉ:</h1>
         <div className=" flex flex-row">
                <div className="bg-white text-black border w-16 h-14   rounded-xl  ">
                  <h3 className="text-center flex flex-col  font-light">00 <span>Dias</span></h3>
                </div>
                <div className=" ml-3 bg-white text-black border w-16 h-14   rounded-xl  ">
                  <h3 className="text-center flex flex-col  font-light">00 <span>Hrs</span></h3>
                </div>
                <div className= " ml-3 bg-white text-black border w-16 h-14   rounded-xl  ">
                  <h3 className="text-center flex flex-col  font-light">00 <span>Min</span></h3>
                </div>
                <div className="ml-3 bg-white text-black border w-16 h-14   rounded-xl">
                  <h3 className="text-center flex flex-col  font-light">00 <span>Seg</span></h3>
                </div>
                
                
          </div>
            
        
      </header>
    </main>
  );
}
