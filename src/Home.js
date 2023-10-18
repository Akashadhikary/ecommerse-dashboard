import React from 'react'
import { BsFillArchiveFill, BsFillFileArrowUpFill, BsFillFileArrowDownFill, BsFillGrid3X3GapFill, BsCurrencyDollar, BsFillBagFill }
  from 'react-icons/bs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Pie }
  from 'recharts';
import ProductList from './ProductList';
import './App.css'
import { PieChart } from "react-minimal-pie-chart";

function Home() {

  let data1 = [
    { title: "Repeated Customers", value: 1, color: "pink" },
    { title: "Old Customers", value: 2, color: "#7a7ae9" },
    { title: "New Customers", value: 3, color: "rgb(193, 231, 112)" },
  ];

  const data = [
    {
      name: 'Jan',
      Earning: 200,
    },
    {
      name: 'Feb',
      Earning: 1300,
    },
    {
      name: 'Mar',
      Earning: 800,
    },
    {
      name: 'Apr',
      Earning: 500,
    },
    {
      name: 'May',
      Earning: 1900,
    },
    {
      name: 'June',
      Earning: 1700,
    },
    {
      name: 'July',
      Earning: 800,
    },
    {
      name: 'Aug',
      Earning: 1200,
    },
    {
      name: 'Sept',
      Earning: 800,
    },
    {
      name: 'Oct',
      Earning: 1000,
    },
    {
      name: 'Nov',
      Earning: 1800,
    },
    {
      name: 'Dec',
      Earning: 2000,
    },
  ];


  return (
    <main className='main-container'>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <BsFillArchiveFill className='card_icon' />
            <h3>Earning</h3>
          </div>
          <h2>$198k</h2>
          <hh4><span style={{ color: "green" }}><BsFillFileArrowUpFill />37.8%</span> this month</hh4>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Orders</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h2>$2.4k</h2>
          <hh4><span style={{ color: "red" }}><BsFillFileArrowDownFill />2%</span> this month</hh4>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Balance</h3>
            <BsCurrencyDollar className='card_icon' />
          </div>
          <h1>$2.4k</h1>
          <hh4><span style={{ color: "red" }}><BsFillFileArrowDownFill />2%</span> this month</hh4>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total Sales</h3>
            <BsFillBagFill className='card_icon' />
          </div>
          <h1>$89k</h1>
          <hh4><span style={{ color: "green" }}><BsFillFileArrowUpFill />11%</span> this week</hh4>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height="75%">
          <BarChart
            width={700}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Earning" fill="violet" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="80%" height="70%">
          <PieChart
            animate
            animationDuration={40}
            animationEasing="ease-in"
            center={[50, 50]}
            data={data1}
            lineWidth={15}
            lengthAngle={360}
            paddingAngle={0}
            radius={50}
            rounded
            startAngle={0}
            viewBoxSize={[100, 100]}
            labelStyle={{
              fontSize: "6px",
              fontColor: "green",
              fontWeight: "500",
              fontFamily: "monospace",
            }}
          >
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Pie dataKey="Earning" fill="violet" />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="container">
      <header className="header">
        <h1>Product Sell</h1>
      </header>
      <ProductList />
    </div>

    </main>
  )
}

export default Home