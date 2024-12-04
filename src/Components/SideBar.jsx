import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { useNavigate } from "react-router-dom";
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan';
import OfflineShareIcon from '@mui/icons-material/OfflineShare';
import SettingsIcon from '@mui/icons-material/Settings';
import RecommendIcon from '@mui/icons-material/Recommend';
import Logo from '../assets/Logo.png';
function SideBar() {
    const [ActiveLink, setActiveLink] = useState('/InstantPayment')
    const handleAactiveLink = (value) => {
        setActiveLink('')
        setActiveLink(value)
    }


    return (
        <div className="h-svh px-4 border-r-2 bg-[#00A16B] pb-10 overflow-x-auto">
            <div>
                <div className="h-14  flex items-center justify-center text-2xl font-bold ">
                    
<img src={Logo} alt="" className="w-full h-15"/>
                </div>
                <div>
                    <div>

                        <div className="p-2 flex justify-start items-center text-[#50c79f] font-semibold  mx-4">Your company</div>
                <Link to={'/'}>
                            <div onClick={() => handleAactiveLink('/DashBoard')} className={`${ActiveLink == '/DashBoard' ? "ActiveLink" : 'navLink'}`}>
                                <div className="flex items-center justify-between w-full">
                                    <div className="gap-2 flex items-center">
                                        <DashboardIcon />
                                        <span >  DashBoard</span>
                                    </div>
                                    {ActiveLink == '/DashBoard' && <div className="w-[4px] h-6 bg-yellow-500"></div>}
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>


                    <div onClick={() => handleAactiveLink('Banks')}>
                        <Link to={'/'}>
                            <div className={`${ActiveLink == 'Banks' ? "ActiveLink" : "navLink"}`}>
                                <div className="flex items-center justify-between w-full">
                                    <div className="gap-2 flex items-center">
                                        <AssuredWorkloadIcon />
                                        <span >  Banks</span>
                                    </div>
                                    {ActiveLink == 'Banks' && <div className="w-[4px] h-6 bg-yellow-500"></div>}
                                </div>
                            </div>
                        </Link>
                    </div>

                    <Link  to={'/'}>
                        <div onClick={() => handleAactiveLink('Customers')} className={`${ActiveLink == 'Customers' ? "ActiveLink" : 'navLink'}`}>
                            <div className="flex items-center justify-between w-full">
                                <div className="gap-2 flex items-center">
                                    <Diversity3Icon />
                                    <span>  Customers</span>
                                </div>
                                {ActiveLink == 'Customers' && <div className="w-[4px] h-6 bg-yellow-500"></div>}
                            </div>
                        </div>
                    </Link>
                </div>
                <div>

                    <Link   to={'/'}>
                        <div className={`${ActiveLink === 'Request' ? "ActiveLink" : 'navLink'}`} onClick={() => setActiveLink('Request')}>
                            <div className="flex items-center justify-between w-full">
                                <div className="gap-2 flex items-center">
                                    <RequestQuoteIcon />
                                    <span>  Request</span>
                                </div>
                                {ActiveLink === 'Request' && <div className="w-[4px] h-6 bg-yellow-500"></div>}
                            </div>
                        </div>
                    </Link>


                    <Link    to={'/'}>
                        <div className={`${ActiveLink === '/InstantPayment' ? "ActiveLink" : 'navLink'}`} onClick={() => setActiveLink('/InstantPayment')}>
                            <div className="flex items-center justify-between w-full">
                                <div className="gap-2 flex items-center">
                                    <AccountBalanceWalletIcon />
                                    <span>  Instant Payment</span>
                                </div>
                                {ActiveLink === '/InstantPayment' && <div className="w-[4px] h-6 bg-yellow-500"></div>}

                            </div>
                        </div>
                    </Link>
                    <Link    to={'/'}>
                        <div className={`${ActiveLink === '/Ledgers' ? "ActiveLink" : 'navLink'}`} onClick={() => setActiveLink('/Ledgers')}>
                            <div className="flex items-center justify-between w-full">
                                <div className="gap-2 flex items-center">
                                    <MenuBookIcon />
                                    <span>  Ledgers</span>
                                </div>
                                {ActiveLink === '/Ledgers' && <div className="w-[4px] h-6 bg-yellow-500"></div>}
                            </div>
                        </div>
                    </Link>



                    <Link    to={'/'}>
                        <div className={`${ActiveLink === '/Settlements' ? "ActiveLink" : 'navLink'}`} onClick={() => setActiveLink('/Settlements')}>
                            <div className="flex items-center justify-between w-full">
                                <div className="gap-2 flex items-center">
                                    <SettingsOverscanIcon />
                                    <span>  Settlements</span>
                                </div>
                                {ActiveLink === '/Settlements' && <div className="w-[4px] h-6 bg-yellow-500"></div>}
                            </div>
                        </div>
                    </Link>

                    <Link    to={'/'}>
                        <div className={`${ActiveLink === '/Offlinedeposit' ? "ActiveLink" : 'navLink'}`} onClick={() => setActiveLink('/Offlinedeposit')}>
                            <div className="flex items-center justify-between w-full">
                                <div className="gap-2 flex items-center">
                                    <OfflineShareIcon />
                                    <span>  Offline deposit</span>
                                </div>
                                {ActiveLink === '/OfflineDeposit' && <div className="w-[4px] h-6 bg-yellow-500"></div>}
                            </div>
                        </div>
                    </Link>

                </div>
                <div>
                    <p className="p-2 flex justify-start items-center text-[#50c79f] font-semibold mx-4 ">Tools</p>

                    <Link >
                        <div onClick={() => setActiveLink('/Geteways')} className={`${ActiveLink === '/Geteways' ? "ActiveLink" : 'navLink'}`}>
                            <div className="flex items-center justify-between w-full">
                                <div className="gap-2 flex items-center">
                                    <RecommendIcon />
                                    <span>  Geteways</span>
                                </div>
                                {ActiveLink === '/Geteways' && <div className="w-[4px] h-6 bg-yellow-500"></div>}
                            </div>
                        </div>
                    </Link>


                    <Link >
                        <div onClick={() => setActiveLink('/Support')} className={`${ActiveLink === '/Support' ? "ActiveLink" : 'navLink'}`}>
                            <div className="flex items-center justify-between w-full">
                                <div className="gap-2 flex items-center">
                                    <PersonIcon />
                                    <span>Support</span>
                                </div>
                                {ActiveLink === '/Support' && <div className="w-[4px] h-6 bg-yellow-500"></div>}
                            </div>
                        </div>
                    </Link>
                    <Link >
                        <div onClick={() => setActiveLink('/Setting')} className={`${ActiveLink === '/Setting' ? "ActiveLink" : 'navLink'}`}>
                            <div className="flex items-center justify-between w-full">
                                <div className="gap-2 flex items-center">
                                    <SettingsIcon />
                                    <span>Setting</span>
                                </div>
                                {ActiveLink === '/Setting' && <div className="w-[4px] h-6 bg-yellow-500"></div>}
                            </div>
                        </div>
                    </Link>



                </div>
            </div>

<hr className="text-gray-200"/>
        </div>
    );
}

export default SideBar;

