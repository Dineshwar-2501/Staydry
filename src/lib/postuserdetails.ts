

import { ObiDetail } from "@/types/obiDetails";
import { useMutation} from "@tanstack/react-query"
import axios from "axios"



 const postUser =  async (formdata: FormData) => {

    // const name = formdata.get('name') as string
    // console.log(`The Name is  : ${name}`)

    
    const data = Object.fromEntries(formdata.entries());

    const userData:ObiDetail = {
        name: data.name as string,
        phone: Number(data.phone),
        email: data.mail as string,
        date: data.date as string,
        comment: data.comment as string
    }

    const res =  await axios.post('http://localhost:4000/users', userData)
    return res.data

}


export const useUserData = () => {
    return useMutation({ mutationFn: postUser })
}



