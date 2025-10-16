import React from "react";
import "../css/style.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosEye } from "react-icons/io";
import { GoArchive } from "react-icons/go";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

import { Link, useLoaderData } from "react-router-dom";
import usePagination from "./UsePagination";

function Clients() {
  const userpng = useLoaderData();
  const navigate = useNavigate()
  const { currentPage, setCurrentPage, currentData, maxPage } = usePagination(
    userpng || [], 5
    
  ); 

  return (
    <div className="container">

        <div className="pagination">
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
       </div>
      
       <div className="tableblock">
      <table>
        <thead>
          <tr>
            <th>Անուն</th>
            <th>Ազգանուն</th>
            <th>Հայրանուն</th>
            <th>Հեռախոս</th>
            <th>Ծննդյան ամսաթիվ</th>
            <th>Կարգավիճակ</th>
            <th>Գործողություն</th>
          </tr>
        </thead>
        <tbody>
          {currentData?.map((el, ind) => {
            return (
              <tr key={ind} className="client"  >
                {/* <Link > */}
                <td onClick={() => { navigate('/customer')}}>{el?.name}</td>
                {/* </Link> */}
                <td>{el?.username}</td>
                <td>{el?.name}</td>
                <td>{el?.username}</td>
                <td>{el?.name}</td>
                <td>{el?.username}</td>
                <td>
                  {" "}
                  <span className="tooltip" data-title="Փոփոխել">
                    <FaEdit className="edit" />
                  </span>
                  <MdDelete title="Ջնջել" className="edit" />
                  <IoIosEye className="edit" title="Արագ դիտում" />
                  <GoArchive className="edit" title="Արխիվացնել" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Clients;

export const loaderFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
};
