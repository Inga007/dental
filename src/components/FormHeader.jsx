import React from "react";
import { Formik, Form, Field } from "formik";
import "../css/style.css";
import AddClient from "./AddClient";

function FormHeader() {
  return (
   <div className="container">

    <AddClient/>
        <div className="home_inputs">
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
          
              data: "",
              state: "",
              occupation: ""
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
              <Form className="formMain" onSubmit={handleSubmit}>
              
                <div className="input_block">
                  <label htmlFor="name" className="label-form">Անուն</label>
                  <Field
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Անուն"
                    autoComplete="off"
                    className="input-form"
                  />
                </div>
                 <div className="input_block">
                  <label htmlFor="lastname" className="label-form">Ազգանուն</label>
                <Field
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                  placeholder="Ազգանուն"
                />
                 </div>
                 <div className="input_block">
                  <label htmlFor="middlename" className="label-form">Հայրանուն</label>
  
                <Field
                  type="text"
                  name="middlename"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.middlename}
                  placeholder="Հայրանուն"
                />
              </div>
                 <div className="input_block">
                  <label htmlFor="email" className="label-form">էլ․ հասցե</label>
                <Field
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Էլ, հասցե"
                />
                </div>
                
                  <div className="input_block">
                  <label htmlFor="phone" className="label-form">Հեռախոս</label>
                <Field
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  placeholder="Հեռախոս"
                />
                 </div>
                
                 <div className="input_block">
                  <label htmlFor="occupation" className="label-form">Մասնագիտություն</label>
                <Field as="select" name="occupation">
                  <option value="" readOnly>
                    Մասնագիտություն
                  </option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="yellow">Yellow</option>
                </Field>
                 </div>
                 <div className="input_block">
                  <label htmlFor="articul" className="label-form">Արտիկուլ</label>
                <Field
                  type="text"
                  name="articul"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.articul}
                  placeholder="Արտիկուլ"
                />
                 </div>
                 <div className="input_block">
                  <label htmlFor="date" className="label-form">Ծննդյան ամսաթիվ</label>
                <Field
                  type="date"
                  name="data"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.date}
                  placeholder="Ծննդյան ամս,"
                />
                 </div>
                   <div className="input_block">
                  <label htmlFor="state" className="label-form"> Կարգավիճակ</label>
                <Field as="select" name="state">
                  <option value="" readOnly>
                    Կարգավիճակ
                  </option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="yellow">Yellow</option>
                </Field>
                 </div>
                 <div className="input_block">
                  <label htmlFor="start" className="label-form">Սկիզբ</label>
                <Field
                  type="text"
                  name="start"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.start}
                  placeholder="Սկիզբ"
                />
                 </div>
                 <div className="input_block">
                  <label htmlFor="end" className="label-form">Վերջ</label>
                <Field
                  type="text"
                  name="end"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.end}
                  placeholder="Վերջ"
                />
                 </div>
               
                <button type="submit" disabled={isSubmitting}>
                  Որոնել
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
  )
}

export default FormHeader