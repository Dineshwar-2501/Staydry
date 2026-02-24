'use client'
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchUser = async () => {
    const res = await axios.get('http://localhost:4000/users')
    return res.data

}

export const useFetchUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchUser
    })
}