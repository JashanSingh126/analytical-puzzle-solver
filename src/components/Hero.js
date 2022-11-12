import React from 'react';
import {useState, useEffect} from "react";

export default function Hero() {
  const backgrounds = require('../images/background.png');
  const sudoku = require('../images/sudoku.png');
  const riddle = require('../images/riddle.png');

  const [sudos, setSudokus] = useState(
    [
        {
            sudokus: "", 
        }
    ]
  );



  useEffect(() => {
    fetch("http://localhost:4000/")
      .then(res => res.json())
      .then(data => setSudokus(data))
  }, []);

  useEffect(() => {
    console.log("questions in use effect" + sudos);
  }, [sudos]);

//   useEffect(() => {
//     console.log("questions in use effect" + sudokus);
//   }, [sudokus]);

//   console.log("qbrooooooo" + sudokus[0]);


  return (
    <>
        <img src={backgrounds} className="z-10 left-[50px] scale-150" alt=""/>

       

        <div className="flex flex-col space-y-3 absoulte">
            <h1 className="text-white font-semibold z-20 absolute bottom-[550px] left-[100px] font-cabin text-[40px]">
                Welcome to the Analyatical Puzzle Solver!
            </h1>

            <h1 className="text-white z-20 font-semibold font-cabin absolute bottom-[500px] left-[100px] text-[22px]">
                To get the party started please click one of the puzzles below:
            </h1>
        </div>

        <div className="flex flex-row space-x-3">
            <div className="bg-white rounded-lg absolute bottom-[1px] left-[300px] z-20 w-[500px] h-[400px]">
                <h1 className="hover:bg-blue-300 font-myCabin text-black-500  text-[20px] relative left-[150px] top-[10px]">{sudos[0].sudokus}</h1>

                <img src={sudoku} className="z-30 relative left-[120px] top-[30px] scale-x-110" alt=""/>
                <a action = "time.php" className="hover:bg-blue-300 font-myCabin relative left-[150px] top-[50px] text-white text-[20px]  px-10 py-3 bg-myBlue text-center rounded-[10px]"> Sudoku Puzzle</a>
            </div>

            <div className="bg-white rounded-lg absolute bottom-[1px] left-[1000px] z-20 w-[500px] h-[400px]">
                <img src={riddle} className="z-30 relative left-[120px] top-[30px] scale-x-110" alt=""/>
                <a className="hover:bg-blue-300 font-myCabin relative left-[160px] top-[60px] text-white text-[20px]  px-10 py-3 bg-myBlue text-center rounded-[10px]"> Riddle Puzzle</a>
            </div>
        </div>

    </>
  )
}
