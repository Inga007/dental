import ClientDetails from "../pages/ClientDetails";


// import { TbPlayerTrackPrevFilled } from "react-icons/tb";
// import { TbPlayerTrackNextFilled } from "react-icons/tb";
// import { useNavigate } from "react-router-dom";

// import { Link, useLoaderData } from "react-router-dom";
// import usePagination from "./UsePagination";


export default function TabButtons({ petData, activeTab, setActiveTab }) {
 
  // const userpng = useLoaderData();
  // const navigate = useNavigate()
  // const { currentPage, setCurrentPage, currentData, maxPage } = usePagination(
  //   userpng || [], 5
    
  // ); 
  return (
    <>
    {/* <div className="pagination">
     <div className="chooseTipes">
           <form >
               <label>
              <input type="text" placeholder="Անուն" /> 
            </label>
             <label >
              <input type="text"  placeholder="Ազգանուն" /> 
            </label>
              <label >
              <input type="text"  placeholder="Արտիկուլ" /> 
            </label>
             <label >
             <select >
              <option value="1">Կարգավիճակ</option>
               <option value="2">Ընթացքում</option>
                <option value="3">Ավարտված</option>
                <option value="4">Վճարված</option>
                   <option value="5">Ավարտված/չվճարված</option>
             </select>
            </label>
            <label htmlFor="ortodontia" className="labelChoose">
              <input type="radio" name="chooseTipe" id="ortodontia" /> Օրթոդոնտիա
            </label>
             <label htmlFor="stomotologia" className="labelChoose" >
              <input type="radio"  name="chooseTipe" id="stomotologia" /> Ստոմատոլոգիա
            </label>
           </form>
           </div>
         <div className="paginBtn">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
           <TbPlayerTrackPrevFilled />
    
          </button>
          <span>
            Page {currentPage} of {maxPage}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(maxPage, prev + 1))}
            disabled={currentPage === maxPage}
          >
           <TbPlayerTrackNextFilled />
          </button>
          </div>
           </div> */}
    <ClientDetails/>
    <div className="tab__header">

      {petData.map((item, index) => (
        <li
          className={`${index === activeTab && "active"} tab__button`}
          key={item.animal}
          onClick={() => setActiveTab(index)}
        >
          {item.animal}
        </li>
      ))}
    
    </div>
    </>
  );
}
