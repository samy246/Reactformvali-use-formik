import React,{Component} from 'react'
import{useFormik} from 'formik'
import * as yup from 'yup'


// const validate=values=>{
//   var errors={};
//   //name illana errors.name worked
//   if(!values.name) {
//     errors.name="Name is required"

//   } else if (values.name.length>15) {
//     errors.name="Maximum 15 characters only"

//   }else if (values.name.length<3) {
//     errors.name="Minimum 3 characters required"

//   }


// return errors;
// }

 const App=()=>{

  const formik=useFormik({
    initialValues : {
      name:'',
      email:'',
      list:'',
      password:'',
      confirmpassword:'',
    },

    // validate,
    validationSchema:yup.object({
      name:yup.string()
      .strict()
      //.uppercase()
      .trim()
      .required("Name is required")
      .min(5,"Minimum 5 characters required")
      .max(15,"Minimum 15 characters required"),
  email:yup.string()
      .email()
      .required("Email is required"),
  list:yup.string()
      .required("List is required"),
  password:yup.string()
      .required("Password is required"),

  confirmpassword:yup.string()
      .oneOf([yup.ref('password'),null],"Confirm password must be same as password")
      .required("Confirm Password is required")

    }),

// display o/p in console
    onSubmit:(userInputData)=>{
console.log(userInputData);
    }
  })
  return(
    <div className="container mt-3">
    <div className="jumbotron">
      <h1 className="text-center">Form</h1>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
       {/*  one form grp */}
        <div className="form-group">
        <label>Name:</label>
        <input 
        className="form-control"
        type="text" 
        name="name" 
        onChange={formik.handleChange}
        value={formik.values.name}
        />
        {formik.errors.name ?
        <div className="text-danger">{formik.errors.name}</div>
              :null
      }
        </div>
 {/* one form grp */}

{/* email */}
<div className="form-group">
        <label>Email:</label>
        <input 
        className="form-control"
        type="text" 
        name="email" 
        onChange={formik.handleChange}
        value={formik.values.email}
        />
        {formik.errors.email ?
        <div className="text-danger">{formik.errors.email}</div>
              :null
      }
        </div>
{/* email */}

{/* <!---next i/p is list--> */}
<div className="form-group">
  <label>Select list:</label>
  <select
  name="list" 
  onChange={formik.handleChange}
  value={formik.values.list} 
  className="form-control" id="sel1">
    <option value="">==Select One==</option>
    <option  value="1">1</option>
    <option  value="2">2</option>
    <option  value="3">3</option>
  </select>
  {formik.errors.list ?
        <div className="text-danger">{formik.errors.list}</div>
              :null
      }
</div>
{/* <!---next form i/p is list--> */}

{/* passwod */}
<div className="form-group">
        <label>Password:</label>
        <input 
        className="form-control"
        type="text" 
        name="password" 
        onChange={formik.handleChange}
        value={formik.values.password}
        />
        {formik.errors.password ?
        <div className="text-danger">{formik.errors.password}</div>
              :null
      }
        </div>
        {/* passwod */}
        
        {/* confrm password */}
        <div className="form-group">
        <label>Confirm Password:</label>
        <input 
        className="form-control"
        type="text" 
        name="confirmpassword" 
        onChange={formik.handleChange}
        value={formik.values.confirmpassword}
        />
        {formik.errors.confirmpassword ?
        <div className="text-danger">{formik.errors.confirmpassword}</div>
              :null
      }
        </div>
         {/* confrm password */} 

        <button className="btn btn-primary" type='submit'>Submit</button>
      </form>
      </div>
    </div>
  )

}
export default App;