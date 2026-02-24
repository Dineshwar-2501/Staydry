"use client"
import { useFetchUsers } from "@/hooks/useFetchUsers";
import { ObiDetail } from "@/types/obiDetails";



export default function Users() {
    const { data, isLoading } = useFetchUsers()
    return (
        <div className="mx-auto px-4 md:px-10 mt-35">
            {isLoading && <p>Loading...</p>}
            <ol>
                {data?.map((user: ObiDetail) => (
                    <li key={user.id}>
                        <p>{user.id}.{user.name}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
}