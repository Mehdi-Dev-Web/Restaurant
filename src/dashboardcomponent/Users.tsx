import { useEffect, useState } from "react";
import supabase from "../data/supa";

type TypeUser = {
    id : number;
    isAdmin : boolean;
    email : string;
}

function Users() {
    const [users, setUsers] = useState<TypeUser[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchUsers = async()=>{
            setLoading(true);
            const {data, error} = await supabase.from("users").select("*");
            if(error){
                console.log(error);
            }
            if(data){
                setUsers(data);
                setLoading(false);
            }
        }
        fetchUsers()
    },[])

    const handleUpdate = async(id:number, newAdminStatus: boolean)=>{
        try {
            const { error } = await supabase.from('users').update({ isAdmin: newAdminStatus }).eq('id', id);

            if (error) {
                console.error('Error updating user:', error);
                return;
            }

            // Update local state
            setUsers(users.map(user => 
                user.id === id ? { ...user, isAdmin: newAdminStatus } : user
            ));
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            {loading
                ? <div className="flex justify-center items-center h-screen bg-lightBlack text-orange">Loading...</div>
                : <>
                    <div className="text-white grid grid-cols-8 py-4 px-6">
                        <p className="col-span-2">Id</p>
                        <p className="col-span-2">IsAdmin</p>
                        <p className="col-span-4">Email</p>
                    </div>

                    {users.map((user)=>(
                        <div key={user.id} className="h-[60px] bg-white grid grid-cols-8 px-6 rounded-lg mt-4">
                            <div className="col-span-2 flex items-center text-black">{user.id}</div>
                            <div className="col-span-2 flex items-center text-black">
                                <select 
                                    value={user.isAdmin.toString()} 
                                    onChange={(e) => handleUpdate(user.id, e.target.value === 'true')}
                                    className="border rounded px-2 py-1"
                                >
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </div>
                            <div className="col-span-4 flex items-center text-black">{user.email}</div>
                           
                        </div>
                    ))}
                </>
            }
        </>
    )
}

export default Users