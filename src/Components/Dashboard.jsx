"use client";

import React, { useState } from 'react';
import { FaBars, FaHome, FaChartBar, FaCreditCard, FaRProject } from 'react-icons/fa';
import { TbShoppingBagSearch } from "react-icons/tb";
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for larger screens */}
      <div className={`hidden lg:flex lg:flex-col lg:w-64 bg-gray-800 text-white p-4`}>
        <Link href="/dashboard" className="flex items-center space-x-2">
          <FaHome size={24} />
          <span>Dashboard</span>
        </Link>
        <Link href="/dashboard/found-items" className="flex items-center space-x-2 mt-4">
          <TbShoppingBagSearch size={24} />
          <span>Found Items</span>
        </Link>
        <Link href="/dashboard/cart" className="flex items-center space-x-2 mt-4">
          <FaChartBar size={24} />
          <span>Cart</span>
        </Link>
        <Link href="/dashboard/payments" className="flex items-center space-x-2 mt-4">
          <FaCreditCard size={24} />
          <span>Payments</span>
        </Link>
      </div>

      {/* Drawer for small and medium screens */}
      <div className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-4 transition-transform ${isDrawerOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
        <button onClick={toggleDrawer} className="text-xl absolute top-4 right-4">
          <IoMdClose />
        </button>
        <div className="flex flex-col mt-12">
          <Link href="/dashboard" className="flex items-center space-x-2 mb-4" onClick={toggleDrawer}>
            <FaHome size={24} />
            <span>Dashboard</span>
          </Link>
          <Link href="/dashboard/chart" className="flex items-center space-x-2 mb-4" onClick={toggleDrawer}>
            <FaChartBar size={24} />
            <span>Chart</span>
          </Link>
          <Link href="/dashboard/payments" className="flex items-center space-x-2" onClick={toggleDrawer}>
            <FaCreditCard size={24} />
            <span>Payments</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
