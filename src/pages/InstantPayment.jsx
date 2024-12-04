import SideBar from "../Components/SideBar"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useState } from "react";
function InstantPayment() {
  const [activeTab, setActiveTab] = useState('toPay'); 
  const [sortBy, setSortBy] = useState('amount');
  const [sortOrder, setSortOrder] = useState('asc'); 
const [selectedUser, setSelectedUser] = useState([]);
const [selectedStatus, setSelectedStatus] = useState('pending'); 
console.log(selectedUser)
const [Data,SetData] = useState([
  {
    id:0,
    no:1,
user:'Maryamawit Mambwe',
    StartDate:'2024-03-30',
    Service:'web development',
    Amount:100,
    DueSate:'2024-04-30',
Status:'pending'
  },
  {
    id:1,
    no:5,
user:'Mehdi Okoro',
    StartDate:'2024-03-30',
    Service:'web development',
    Amount:110,
    DueSate:'2024-04-30',
Status:'pending'
  },
  {
    id:2,
    no:3,
user:'Tawana Bankole',
    StartDate:'2024-03-30',
    Service:'web development',
    Amount:120,
    DueSate:'2024-04-30',
Status:'pending'
  },
  {
    id:3,
    no:4,
user:'Tamiran mambwe',
    StartDate:'2024-03-30',
    Service:'web development',
    Amount:130,
    DueSate:'2024-04-30',
Status:'pending'
  },
  {
    id:4,
    no:5,
user:'Kamawu Adimbola',
    StartDate:'2024-03-30',
    Service:'web development',
    Amount:140,
    DueSate:'2024-04-30',
Status:'pending'
  },
])

const handleCheckboxChange = (id,Status) => {
  setSelectedStatus(Status)
  setSelectedUser((prev) => 
    prev.includes(id) 
      ? prev.filter(userId => userId !== id) 
      : [...prev, id]
  );
};


const handleStatusChange = (newStatus) => {
setSelectedStatus(newStatus)
  const updatedData = Data.map((item) =>
    selectedUser.includes(item.id) ? { ...item, Status: newStatus } : item
  );
  
  setSelectedUser([]);
  SetData(updatedData);
};



  const sortedData = [...Data].sort((a, b) => {
    if (sortBy === 'amount') {
      return sortOrder === 'asc' ? a.Amount - b.Amount : b.Amount - a.Amount;
    } else if (sortBy === 'no') {
      return sortOrder === 'asc' ? a.no - b.no : b.no - a.no;
    }
    return 0;
  });

  
  
  return (
    <>
  <div className='flex text-gray-400'>
        <div className='w-1/5 h-auto '>
          <SideBar />
        </div>
<div className='w-4/5 h-svh '>
          <div className="flex justify-between mt-4 px-8">
            <div className="text-2xl font-semibold text-[#00A16B]">
              <AccountBalanceWalletIcon />
              <span>  Instant Payment</span>
            </div>

            <div className="flex items-center justify-center gap-5">
              <div className="bg-[#00A16B] cursor-pointer p-2 rounded-md text-white">
                <FiberManualRecordIcon className="size-3" />
                Test Mode
              </div>
              <div className="relative cursor-pointer">
                <NotificationsNoneIcon />
                <div className="absolute top-[-5px]  text-sm flex justify-center items-center right-[-5px] bg-red-500  text-white rounded-full size-4">3</div>
              </div>
              <div className="w-[2px] h-8 bg-gray-300"></div>
              <div className="bg-[#00A16B] p-2 rounded-full font-bold text-white ">
                HB
              </div>

            </div>
          </div>
          <hr className="mt-5 text-gray-200" />

<div className="flex mx-8 cursor-pointer border-gray-200 shadow-bottom">
            <div className={`text-bold font-bold px-8   cursor-pointer py-4 ${
                activeTab === 'toPay' ? 'border-[#00A16B] border-b-4 rounded-sm text-[#00A16B]' : ''
              }`}  onClick={() => setActiveTab('toPay')}>To Pay</div>
            <div  className={`text-bold font-bold px-8   cursor-pointer py-4 ${
                activeTab === 'Request' ? 'border-[#00A16B] border-b-4 rounded-sm text-[#00A16B]' : ''
              }`}  onClick={() => setActiveTab('Request')}>My Request</div>
              
        
          </div>
          <hr />
<div className="flex justify-between items-center text-gray-600 mx-8 my-3 p-4 bg-gray-100 rounded-md">
              <div>
<div className="font-semibold text-xl">Filter</div>
              </div>
        <div className="flex gap-5">
<div className="flex items-center  gap-2">
<div className="font-semibold text-lg">Status</div>
<select value={selectedStatus} onChange={(e) => handleStatusChange(e.target.value)}  className="border border-gray-300 rounded-md p-2">
          <option  value="pending">Pending</option>
              <option  value="completed">Completed</option>
            </select>
            </div>
            <div className="flex items-center  gap-2">
<div className="font-semibold text-lg">Sort By</div>
<select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border border-gray-300 rounded-md p-2">
  <option value="amount">Amount</option>
<option value="no">No</option>
            </select>
            </div>
            <div className="flex items-center  gap-2">
<div className="font-semibold text-lg">Sort Order</div>
              <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="border border-gray-300 rounded-md p-2">
              <option value="asc">Increasing</option>
              <option value="desc">Decreasing</option>
            </select>
            </div>
          </div>
        </div>
        <div className="mx-8 mt-6">
<table className="w-full">
    <thead>
        <tr className="text-left text-gray-500 rounded-md bg-gray-100">
            <th className="py-4 px-4">No</th>
            <th className="py-4 px-4">User</th>
            <th className="py-4 px-4">Start Date</th>
            <th className="py-4 px-4">Service</th>
            <th className="py-4 px-4">Amount</th>
            <th className="py-4 px-4">Due Date</th>
            <th className="py-4 px-4">Status</th>
        </tr>
    </thead>
    <tbody>
        {sortedData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
                <td className="py-4 px-4">{item.no}</td>
                <td className="py-4 flex items-center gap-4 px-4">
                    <input
                onClick={() => handleCheckboxChange(item.id,item.Status)}
                        type="checkbox"
                        checked={selectedUser.includes(item.id)}
                        className="w-4 h-4 rounded"
                    />
                      {item.user}</td>
                <td className="py-4 px-4">{item.StartDate}</td>
                <td className="py-4 px-4">{item.Service}</td>
                <td className="py-4 px-4">${item.Amount}</td>
                <td className="py-4 px-4">{item.DueSate}</td>
                <td className="py-4 px-4">
                {item.Status ==='pending'?<span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-600">
                        {item.Status}
                    </span>:<span className="px-3 py-1 rounded-full text-sm bg-green-300 text-white">
                        {item.Status}
</span>}
                </td>
            </tr>
        ))}
    </tbody>
</table>
</div>
        </div>
      
      </div>
    </>
  )
}

export default InstantPayment
