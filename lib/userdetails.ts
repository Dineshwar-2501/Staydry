"use server"

export default async function callus(formdata:FormData) {

    const name=formdata.get('name') as string
    console.log(`The Name is  : ${name}`)

    
    const data=Object.fromEntries(formdata.entries());

    const obiDetail={
        name:data.name as string,
        phone:Number(data.phone),
        Email:data.mail as string,
        Date :data.date as string,
        comment:data.comment as string
    }
    
    console.log(obiDetail)
}