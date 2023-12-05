import Link from "next/link"
import {HiPencilAlt} from "react-icons/hi"
import {HiOutlineTrash} from "react-icons/hi"
import RemoveBtn from "./RemoveBtn"


const CusList = () => {


      
const customers = [
    {
        id: 1,
        name: "farxiyo",
        number: "615450000"
    },
  
    {
        id: 1,
        name: "xafso",
        number: "615450000"
    },
  
    {
        id: 1,
        name: "HAJARA",
        number: "615450000"
    },
  
    {
        id: 1,
        name: "ilyas",
        number: "615450000"
    },
  
    {
        id: 1,
        name: "maxamed",
        number: "615450000"
    },

    {
        id: 1,
        name: "maxamed",
        number: "615450000"
    },

    {
        id: 1,
        name: "maxamed",
        number: "615450000"
    },
  ]


  return (
    
    <div>
        <Link className='flex mt-4 p-2 items-center justify-center bg-yellow-400 font-bold' href={"/addCustomer"}>Add</Link>
       <div>
        {customers.map((customer) => (
            <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <Link href={`loansList/${customer.id}`} className=" w-4/6">
                <h3 className="font-bold ">{customer.name}</h3>
                <p>{customer.number}</p>
                </Link>

                <div className='flex gap-2'>
        <RemoveBtn/>
        <Link href={'/editTopic/123'}>
            <HiPencilAlt size={24} />
        </Link>
      </div>
               
            </div>

            
        ))}
       </div>
    </div>
     
  )
}

export default CusList
