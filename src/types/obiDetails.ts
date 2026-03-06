// export type ObiDetail = {
//     name: string,
//     phone: number,
//     email: string,
//     date: string,
//     comment: string,
//     id?: number
// }

import { z } from 'zod'
export const UserSchema = z.object({
    name: z.string().min(1, "name is Required"),
    phone: z.string().min(10, "Phone Must be 10 digits").transform(Number),
    mail: z.email("Invalid email"),
    date: z.string(),
    comment: z.string().optional()
})

export type ObiDetail = z.infer<typeof UserSchema>