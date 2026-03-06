import { ObiDetail, UserSchema } from './../types/obiDetails';
import { useMutation } from "@tanstack/react-query"
import axios from "axios"




export const postUser = async (formdata: FormData) => {

    // const name = formdata.get('name') as string
    // console.log(`The Name is  : ${name}`)






    const rawdata = Object.fromEntries(formdata.entries());
    const validatedata = UserSchema.parse(rawdata)
    const userData: ObiDetail = {
        name: validatedata.name,
        phone: Number(validatedata.phone),
        mail: validatedata.mail,
        date: validatedata.date,
        comment: validatedata.comment ?? ""
    }

    const res = await axios.post('http://localhost:4000/users', userData)
    return res.data
    // return userData

}


export const useUserData = () => {
    return useMutation<ObiDetail, Error, FormData>({ mutationFn: postUser })
}



