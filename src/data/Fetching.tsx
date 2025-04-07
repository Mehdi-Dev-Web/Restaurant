import { useQuery } from "@tanstack/react-query";
import supabase from "./supa";

//? this is a function that is used to fetch the menu from the database 

const fetchMenu = async () => {
  const { data, error } = await supabase.from("menu").select("*");
  if (error) throw new Error(error.message);
  return data;
};

export const useMenu = () => {
  return useQuery({
    queryKey: ["menu"], // Cache key
    queryFn: fetchMenu,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};
