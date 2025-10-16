import React from 'react'
import Modal from 'react-modal';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Formik, Form, Field } from "formik";
import "../css/style.css";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
 Modal.setAppElement('#root')
function AddClient() {
    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>

         <div className='mpdalCont'>
      <button className='addClient' onClick={openModal}>+</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        
      >
        <div className='modal_header'>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Ավելացնել հաճախորդ</h2>
      <IoMdCloseCircleOutline onClick={closeModal}/>
</div>
     <div className="modal_inputs">
               <Formik
                 initialValues={{
                   name: "",
              lastname: "",
              middlename: "",
              email: "",
              articul: "",
              phone: "",
              start: "",
              end: "",
              address: "",
              data: "",
              state: "",
              occupation: "",
              checked: []
                  
                 }}
               
                 onSubmit={(values, { setSubmitting }) => {
                   setTimeout(() => {
                     alert(JSON.stringify(values, null, 2));
                     setSubmitting(false);
                   }, 400);
                 }}
               >
                 {({
                   values,
                   errors,
                   touched,
                   handleChange,
                   handleBlur,
                   handleSubmit,
                   isSubmitting,
                   /* and other goodies */
                 }) => (
                   <Form className="modalForm" onSubmit={handleSubmit}>
                   
                     <div className="inputs_block">
                       <label htmlFor="name" className="label-form">Անուն
                       <Field
                         type="text"
                         name="name"
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.name}
                         placeholder="Անուն"
                         autoComplete="off"
                         className="input-form"
                       /></label>
                    
                       <label htmlFor="lastname" className="label-form">Ազգանուն
                     <Field
                       type="text"
                       name="lastname"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.lastname}
                       placeholder="Ազգանուն"
                     /></label>
                      </div>
                      <div className="inputs_block">
                       <label htmlFor="middlename" className="label-form">Հայրանուն
       
                     <Field
                       type="text"
                       name="middlename"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.middlename}
                       placeholder="Հայրանուն"
                     />
                     </label>
                   
                       <label htmlFor="email" className="label-form">էլ․ հասցե
                     <Field
                       type="email"
                       name="email"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.email}
                       placeholder="Էլ, հասցե"
                     />
                     </label>
                      </div>
                      <div className="inputs_block">
                       <label htmlFor="phone" className="label-form">Հեռախոս
                     <Field
                       type="tel"
                       name="phone"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.phone}
                       placeholder="Հեռախոս"
                     /></label>
                    
                       <label htmlFor="occupation" className="label-form">Մասնագիտություն
                     <Field as="select" name="occupation">
                       <option value="" readOnly>
                         Մասնագիտություն
                       </option>
                       <option value="red">Red</option>
                       <option value="green">Green</option>
                       <option value="blue">Blue</option>
                       <option value="yellow">Yellow</option>
                     </Field>
                     </label>
                     </div>
                      <div className="inputs_block">
                       <label htmlFor="articul" className="label-form">Արտիկուլ
                     <Field
                       type="text"
                       name="articul"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.articul}
                       placeholder="Արտիկուլ"
                     /></label>
                     
                       <label htmlFor="date" className="label-form">Ծննդյան ամսաթիվ
                     <Field
                       type="date"
                       name="data"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.date}
                       placeholder="Ծննդյան ամս,"
                     /></label>
                      </div>
                      <div className="inputs_block">
                       <label  className="label-form"> Հասցե
                      <Field
                       type="text"
                       name="address"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.address}
                       placeholder="Բնակության Հասցե"
                     /></label>
                     </div>
                 <div className="inputs_block">
  <label className="label-check">
    <Field type="checkbox" name="checked" value="stom" />
    Ստոմատոլոգիա
  </label>

  <label className="label-check">
    <Field type="checkbox" name="checked" value="ort" />
    Օրթոդոնտիա
  </label>
</div>
                   
                    
                    
                   
                   </Form>
                 )}
               </Formik>
             </div>
       
      </Modal>
    </div>
      
    </div>
  )
}

export default AddClient
