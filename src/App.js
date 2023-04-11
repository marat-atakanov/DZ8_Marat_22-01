import {useForm} from "react-hook-form";

// export default function App(){
//   const {register, handleSubmit, watch, formState: {errors}} = useForm()
//   const onSubmit = data => console.log(data)
//
//   console.log(watch("example"));
//   return (
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input defaultValue="test" {...register("example")}/>
//         <input {...register("exampleRequired", {required: true})}/>
//         {errors.exampleRequired && <span>This field is required</span>}
//         <input type="submit"/>
//       </form>
//   )
// }

export default function App() {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = data => {
        console.log(data.birthDate);
        alert(data.firstName + " " + data.lastName + " " + data.gender + " " + (data.birthDate !== "" ? data.birthDate : "Not indicated"))
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
                <p className="title">Registration form</p>
                <div className="firstLastNames">
                    <input {...register("firstName", {required: true})} placeholder="First name"/>
                    <input {...register("lastName", {required: true})} placeholder="Last name"/>
                </div>
                <input className="dateInput" {...register("birthDate", {required: false})} type="date"/>
                <select {...register("gender")}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <button className="submitButton" type="submit">submit</button>
                {errors.firstName && <p className="firstNameError">First name is required </p>}
                {errors.lastName && <p className="lastNameError">Last name is required </p>}
            </div>
        </form>
    )
}