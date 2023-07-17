import React from "react";
import Navbar from "../Components/Navbar";
import DashboardCard from "../Components/DashboardCard";
import ChartCard from "../Components/ChartCard";
import Chart from "../Components/Chart";
const UserProfile = () => {
  const User = localStorage.getItem("UserName");
  return (
    <div>
      <Navbar />
      <div className="m-8">
        <div className="">
          <p className="text-3xl font-semibold text-blue-600 md:pl-10">
            Welcome {User}
          </p>
          <DashboardCard />
        </div>
        <div className="flex flex-col items-center justify-around py-8 space-y-4 lg:flex-row lg:space-y-0">
          <div>
            <ChartCard />
          </div>
          <div className="md:w-[700px] w-[400px] p-4 shadow rounded-2xl">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
