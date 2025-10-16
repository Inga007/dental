import React,  { useState } from 'react'
import { FaTooth } from "react-icons/fa6";
const quesions=[
   {id: 1,
  quesion: "Սրտային հիվանդություններ",
  answer: 'heart'
},
   {
    id: 2,
  quesion: "Բարձր կամ ցածր արյան ճնշում",
   answer: 'hight'
},
  {
    id: 3,
  quesion: "Շաքարային դիաբետ (գլյուկոզայի ցածր կամ բարձր մակարդակ)",
   answer: 'diabet'
},
 {
  id: 4,
  quesion: "Ալերգիա (դեղամիջոցներից, ներարկումներից, լատեքսից և այլն)",
   answer: 'alergy'
},
{
  id: 5,
  quesion: "Արյան մակարդման խանգարումներ",
   answer: 'blood'
},
{
  id: 6,
  quesion: "Էպիլեպսիա կամ մթագնում",
   answer: 'epilepsia'
},
{
  id: 7,
  quesion: "Հարբուխ կամ սեզոնային ալերգիա",
   answer: 'seasone'
},
{
  id: 8,
  quesion: "Հղիություն (կանանց դեպքում) ",
   answer: 'pregnant'
},

]

function SecondTab({ petData, activeTab}) {
   const [marks, setMarks] = useState({});

  const toggleMark = (toothIndex, part) => {
    const key = `${toothIndex}-${part}`;
    setMarks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

   const [mark, setMark] = useState({}); // store {x, y} clicks

   const handleClick = (e, toothIndex) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMark((prev) => {
      const currentMarks = prev[toothIndex] || [];

      // Check if clicked near an existing mark (within 6px radius)
      const existingIndex = currentMarks.findIndex(
        (m) => Math.hypot(m.x - x, m.y - y) < 6
      );

      let newMarks;
      if (existingIndex >= 0) {
        // Remove mark if already exists nearby
        newMarks = currentMarks.filter((_, i) => i !== existingIndex);
      } else {
        // Otherwise add new mark
        newMarks = [...currentMarks, { x, y }];
      }

      return {
        ...prev,
        [toothIndex]: newMarks,
      };
    });
  };

  const Tooth = ({ index }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 160"
      className="svgTooth"
    >
      {/* Crown base */}
      <path
        d="M20,40 Q60,0 100,40 Q95,70 25,70 Z"
        fill={marks[`${index}-crown`] ? "gold" : "white"}
        stroke="black"
        onClick={() => toggleMark(index, "crown")}
      />

      {/* Left cusp */}
      <path
        d="M25,40 Q45,15 60,40 Q50,55 30,55 Z"
        fill={marks[`${index}-leftCusp`] ? "lightblue" : "white"}
        stroke="black"
        onClick={() => toggleMark(index, "leftCusp")}
      />

      {/* Right cusp */}
      <path
        d="M60,40 Q75,15 95,40 Q90,55 70,55 Z"
        fill={marks[`${index}-rightCusp`] ? "lightgreen" : "white"}
        stroke="black"
        onClick={() => toggleMark(index, "rightCusp")}
      />

      {/* Left root */}
      <path
        d="M40,70 Q30,110 40,160 Q50,110 50,70 Z"
        fill={marks[`${index}-leftRoot`] ? "lightcoral" : "white"}
        stroke="black"
        onClick={() => toggleMark(index, "leftRoot")}
      />

      {/* Right root */}
      <path
        d="M70,70 Q80,110 70,160 Q60,110 60,70 Z"
        fill={marks[`${index}-rightRoot`] ? "plum" : "white"}
        stroke="black"
        onClick={() => toggleMark(index, "rightRoot")}
      />
    </svg>
  );
  return (
  <div >
    <div className='gridBlocks'>
        <div className='fourBlocks'>
            <div className='nums'>
                 <span>18</span>
                 <span>17</span>
                 <span>16</span>
                 <span>15</span>
                 <span>14</span>
                 <span>13</span>
                 <span>12</span>
                 <span>11</span>

                 </div>
            <div className='lines'>
                <p>Կարիես</p> 
                 {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
            </div>
            <div className='lines'>
                <p>Պլոմբա</p> 
                 {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
            </div>
            <div className='lines'> 
                <p>Կերամիկա</p> 
                {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
                </div>
            <div className='lines'>
                 <p>Իմպլանտ</p> 
                {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
            </div>
            <div className='lines'>
                 <p>Շտիֆտ</p> 
                 {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
            </div>
             <div className='lines'>
                 <p>Ներվի հեռ</p> 
                 {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
            </div>
             <div className='nums'>
           {Array.from({ length: 8 }).map((_, index) => (
        <Tooth key={index} index={index} />
      ))}
                 </div>

        </div>
         <div className='fourBlocks'>
            <div className='nums'>
                 <span>21</span>
                 <span>22</span>
                 <span>23</span>
                 <span>24</span>
                 <span>25</span>
                 <span>26</span>
                 <span>27</span>
                 <span>28</span>

                 </div>
            <div className='lines'>
                <p>Կարիես</p> 
                {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
              
                
            </div>
            <div className='lines'>
                <p>Պլոմբա</p> 
                {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
            </div>
            <div className='lines'> 
                <p>Կերամիկա</p> 
                 {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
                </div>
            <div className='lines'>
                 <p>Իմպլանտ</p> 
                {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
            </div>
            <div className='lines'>
                 <p>Շտիֆտ</p> 
                 {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
            </div>
             <div className='lines'>
                 <p>Ներվի հեռ</p> 
               {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
            </div>
           

            <div className="tooth-wrapper">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="tooth-icon"
         
        >
          <FaTooth size={100}  onClick={(e) => handleClick(e, index)}/>
          {(mark[index] || []).map((mark, i) => (
            <span
              key={i}
              className="mark"
              style={{ left: mark.x, top: mark.y }}
            />
          ))}
        </div>
      ))}
    </div>

        </div>
         <div className='fourBlocks'>
            <div className='nums'>
                 <span>48</span>
                 <span>47</span>
                 <span>46</span>
                 <span>45</span>
                 <span>44</span>
                 <span>43</span>
                 <span>42</span>
                 <span>41</span>

                 </div>
            <div className='lines'>
                <p>Կարիես</p> 
                {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
            </div>
            <div className='lines'>
                <p>Պլոմբա</p> 
               {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
            </div>
            <div className='lines'> 
                <p>Կերամիկա</p> 
              {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
                </div>
            <div className='lines'>
                 <p>Իմպլանտ</p> 
               {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
            </div>
            <div className='lines'>
                 <p>Շտիֆտ</p> 
                {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
            </div>
             <div className='lines'>
                 <p>Ներվի հեռ</p> 
               {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
            </div>
             <div className='nums'>
                 {[1,2,3,4,5,6,7,8].map(()=>(
                  <span><FaTooth /></span>
                ))}
                

                 </div>

        </div>
         <div className='fourBlocks'>
            <div className='nums'>
                 <span>31</span>
                 <span>32</span>
                 <span>33</span>
                 <span>34</span>
                 <span>35</span>
                 <span>36</span>
                 <span>37</span>
                 <span>38</span>

                 </div>
            <div className='lines'>
                <p>Կարիես</p> 
               {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
            </div>
            <div className='lines'>
                <p>Պլոմբա</p> 
                {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
            </div>
            <div className='lines'> 
                <p>Կերամիկա</p> 
               {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
                </div>
            <div className='lines'>
                 <p>Իմպլանտ</p> 
                {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
            </div>
            <div className='lines'>
                 <p>Շտիֆտ</p> 
                 {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
            </div>
             <div className='lines'>
                 <p>Ներվի հեռ</p> 
               {[1,2,3,4,5,6,7,8].map(()=>(
                  <input type="checkbox" />
                ))}
            </div>
             <div className='nums'>
                 {[1,2,3,4,5,6,7,8].map(()=>(
                  <span><FaTooth /></span>
                ))}
                

                 </div>

        </div>
  
</div>
<h2 className='quesion_header'>Դուք այժմ ունե՞ք, կամ երբևէ ունեցել եք հետևյալ հիվանդություններից որևէ մեկը</h2>
<div>
<div className='quesions'>
  {quesions?.map(item =>(
    <>
      <div key={item.id} className='quesionBox'>
     <p>{item.quesion}</p>
   
       <div>
        <label > Այո
        <input type="radio" name={item.answer} />
        </label>
    </div>
    <div>
       <label > Ոչ
        <input type="radio"  name={item.answer} />
        </label>
    </div>
    </div>
    </>
  ))}
   
  
</div>
  <button className='questionBtn'>Հաստատել</button>
      </div>
    </div>
  )
}

export default SecondTab
