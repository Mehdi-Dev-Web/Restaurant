import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import supabase from "../data/supa"
import { useEffect, useState } from 'react';
import Inp from './Form';

//? this is a component that is used to display a table of dishes in the dashboard and also to update and delete a dish

type RowData = {
    id: number;
    name: string;
    category: string;
    price: number;
    pic: string;
    };

function DishTable() {

  const [id, setId] = useState<number>()
  const [show, setShow] = useState(false)
  const [name,setName] = useState("")
  const [category,setCategory] = useState("")
  const [price, setPrice] = useState<number | string>("")
  const [data, setData] = useState<RowData[]>([])

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Name of dish', width: 300 },
        { field: 'category', headerName: 'Category', width: 300 },
        {
          field: 'price',
          headerName: 'Price',
          type: 'number',
          width: 150,
        },
        {
          field: 'update',
          headerName: 'Update',
          description: 'This column contains a button for actions.',
          sortable: false,
          width: 120,
          renderCell: (params) => (
            <button
              onClick={() => handleButtonClick(params.row.id)}
              style={{ cursor: 'pointer', padding: '2px 17px' , backgroundColor: 'yellow', color: 'black', border: 'none', borderRadius: '4px' }}
            >
              update
            </button>
          ),
        },
        {
          field: 'delete',
          headerName: 'delete',
          description: 'This column contains a button for actions.',
          sortable: false,
          width: 120,
          renderCell: (params) => (
            <button
              onClick={() => handleDelete(params.row.id)}
              style={{ cursor: 'pointer', padding: '2px 15px' , backgroundColor: 'red', color: 'black', border: 'none', borderRadius: '4px' }}
            >
              delete
            </button>
          ),
        },
      ];
      
        const FetchData = async() => {
            const { data: Dishes, error } = await supabase
            .from('Dishes')
            .select('*')
            if (error) {
                console.error('Error fetching data:', error.message);
            }
            else {
                console.log('Fetched data:', Dishes);
                setData(Dishes)
            }
            return Dishes
        }
        useEffect(() => {
            FetchData()
        },[])

       const handleUpdate = async() => {
        const { data, error } = await supabase
        .from('Dishes')
        .update({ name, category, price })
        .eq('id', id)
        .select()
        if (error) {
            console.error('Error updating data:', error.message);
        }
        if (data) {
            console.log('Updated data:', data);
            setData((prevData) =>
                prevData.map((item) => (item.id === id ? { ...item, name, category, price: Number(price) } : item))
            );
        }
      };
      const handleButtonClick = async (row: number) => {
        setId(row)
        setShow(true)
       }
      const handleDelete = async(row: number) => {
        const {error} = await supabase
        .from('Dishes')
        .delete()
        .eq('id', row)
        if(error) {
          console.error('Error deleting data:', error.message);
        }
        else {
          console.log('Deleted data:', row);
          setData((prevData) => prevData.filter((item) => item.id !== row));
          

        }
      };
 
      
      const paginationModel = { page: 0, pageSize: 5 };
    
  return (
    // Removed the checkboxSelection prop to remove the select field
    <div className='w-fit h-fit bg-orange relative'>
    <Paper sx={{ height: 400, width: '100%',zIndex: 0 }}>
    <DataGrid
      rows={data}
      columns={columns}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[5, 10]}
  
      sx={{ border: 0 }}
    />
  </Paper>
        {show && <Inp setShow={setShow} handleUpdate={handleUpdate} setName={setName} setCategory={setCategory} setPrice={setPrice} name={name}  category={category} price={price}/> } 

    </div>
       
  )
}

export default DishTable