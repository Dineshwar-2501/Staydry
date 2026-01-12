"use server"
export type obiDetail={
    name:string,
    phone:number,
    email:string,
    date:string,
    comment:string
}

export default async function callus(formdata:FormData):Promise<obiDetail> {

    const name=formdata.get('name') as string
    console.log(`The Name is  : ${name}`)

    
    const data=Object.fromEntries(formdata.entries());

    const obiDetail={
        name:data.name as string,
        phone:Number(data.phone),
        email:data.mail as string,
        date :data.date as string,
        comment:data.comment as string
    }
    
    console.log(obiDetail)
    return obiDetail;

}