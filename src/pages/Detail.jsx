import React , {useState} from 'react'
import TabButtons from '../components/Tabbutton'
import TabContent from '../components/TabContent'
import '../css/tab.css'
import SecondTab from '../components/SecondTab';

function Detail() {
      const [activeTab, setActiveTab] = useState(0);
     const petData = [
    {
      animal: "Օրթոդոնտիա ",
      fact: "Cheetahs are the fastest land animals, capable of reaching speeds up to 75 mph.",
     
    },
    {
      animal: "Ստոմատոլոգիա " ,

      fact: "Koalas sleep around 20 hours a day and are known for their eucalyptus diet.",
      
    }
]
 const petDatatwo = [
    {
     
   
      data: "18.04",
         fact: "Cheetahs are the fastest land animals, capable of reaching speeds up to 75 mph.",
      amount: "15000",
      state: 'some'
     
    },
    {
     data: "18.04",
         fact: "Cheetahs are the fastest land animals, capable of reaching speeds up to 75 mph.",
      amount: "15000",
      state: 'some'
    }
]

  return (
    <div className='container'>
    <div className="main__container">
        <TabButtons
  activeTab={activeTab}
        setActiveTab={setActiveTab}
        petData={petData}
      />
      {activeTab === 0 ? <TabContent  activeTab={activeTab} petData={petDatatwo} /> : <SecondTab  activeTab={activeTab} petData={petData} />}
      
      
    </div>
    </div>
  )
}

export default Detail
