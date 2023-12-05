
import Link from "next/link"
import {HiPencilAlt} from "react-icons/hi"
import {HiOutlineTrash} from "react-icons/hi"


const Single = () => {

  const loans = [
    {
      id: 1,
      title: "bariis baasto sonkor",
      desc: "wuxuu qatay 2bariis 1baasto hafSonkor",
      prace: "$12",
      Date: "7-11-2023"
    },

    {
      id: 2,
      title: "bariis baasto bur",
      desc: "wuxuu qatay 2bariis 1baasto 2bur",
      prace: "$12",
      Date: "7-11-2023"
    },

    {
      id: 3,
      title: "caleen baasto sonkor",
      desc: "wuxuu qatay 3caleen 1baasto hafSonkor",
      prace: "$12",
      Date: "7-11-2023"
    },

    {
        id: 3,
        title: "caleen baasto sonkor",
        desc: "wuxuu qatay 3caleen 1baasto hafSonkor",
        prace: "$12",
        Date: "7-11-2023"
      },

      {
        id: 3,
        title: "caleen baasto sonkor wuxuu ",
        desc: "wuxuu qatay 3caleen 1baasto hafSonkor",
        prace: "$12",
        Date: "7-11-2023"
      },

      {
        id: 3,
        title: "caleen baasto sonkor  ",
        desc: "wuxuu qatay 3caleen 1baasto hafSonkor",
        prace: "$12",
        Date: "7-11-2023"
      },
  ]


  return (

    <div class="flex flex-col w-full">
      {loans.map((loan) => (
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
      <div class="overflow-hidden ">
        <table
          class="min-w-full border text-center text-sm font-light dark:border-neutral-500 ">
          <thead class="border-b font-medium dark:border-neutral-500 ">
            <tr>
              <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500 w-3/6">
                Title
              </th>
              <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500 ">
                Price
              </th>
              <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Date
              </th>
              <th scope="col" class="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-neutral-500">
             
              <td
                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                {loan.title}
              </td>
              <td
                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                {loan.prace}
              </td>
              <td class="whitespace-nowrap px-6 py-4">
                {loan.Date}
                </td>
              <td
                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                  <div className="flex gap-2">
                  <button className="text-red-500"> <HiOutlineTrash size={24} /></button>
             
                  < HiPencilAlt size={24} />
                  </div>
             
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
  ))}
</div>

    
// <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
// {loans.map((loan) => (
//     <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//                 <th scope="col" class="px-6 py-3 w-2/6">
//                     Title
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Price
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Date
//                 </th>
               
//                 <th scope="col" class="px-6 py-3">
//                     Action
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                    {loan.title}
//                 </th>
//                 <td class="px-6 py-4">
//                    {loan.prace}
//                 </td>
//                 <td class="px-6 py-4">
//                    {loan.Date}
//                 </td>
//                 <td class="px-6 py-4">
                    
//                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                 </td>
               
//             </tr>
          
//         </tbody>
//     </table>
//     ))}
// </div>


  )
}

export default Single
