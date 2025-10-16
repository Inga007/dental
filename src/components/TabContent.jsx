import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosEye } from "react-icons/io";
import { GoArchive } from "react-icons/go";

export default function TabContent({ petData, activeTab}) {

  return (
    <div className="tab__container ">
      <div className="tab__content">
          <div className="tableblock">
              <table>
                <thead>
                  <tr>
                    
                    <th>Ամսաթիվ</th>
                    <th>Նկարագրություն</th>
                    <th>Գումար</th>
                    <th>Կարգավիճակ</th>
                    <th>Գործողություն</th>
                    <th>Ֆայլ</th>
                  
                  </tr>
                </thead>
                <tbody>
                  {petData?.map((el, ind) => {
                    return (
                      <tr key={ind} className="client"  >
                        {/* <Link > */}
                        <td 
                        // onClick={() => { navigate('/customer')}}
                        >{el?.data}</td>
                        {/* </Link> */}
                        <td>{el?.fact}</td>
                   
                        <td>{el?.amount}</td>
                        <td>{el?.state}</td>
                      
                        <td>
                          {" "}
                          <span className="tooltip" data-title="Փոփոխել">
                            <FaEdit className="edit" />
                          </span>
                          <MdDelete title="Ջնջել" className="edit" />
                          <IoIosEye className="edit" title="Արագ դիտում" />
                          <GoArchive className="edit" title="Արխիվացնել" />
                        </td>
                          <td>{el?.username}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
        {/* {petData.map((pet,index) => (
          <div key={index}>
            
            <p>{petData[activeTab].fact}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
}