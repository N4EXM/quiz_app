import React from 'react'
import Layout from '../components/Layout'
import StatisticsCard from '../components/Home/StatisticsCard'
import GraphCard from '../components/Home/GraphCard'
import { useAuth } from '../context/AuthContext'

const Home = () => {

  const { user } = useAuth()

  return (
    <Layout>
      <div
        className='grid grid-cols-12 grid-rows-12 w-full h-full p-5 gap-4'
      >

        <div
          className='w-full h-full col-span-3 row-span-1'
        >
          <h1
            className='text-3xl font-bold'
          >
            Hello {user.firstName}
          </h1>
        </div>

        <StatisticsCard
          rowStart={2}
          rowEnd={5}
          colStart={1}
          colEnd={5}
        />
        <StatisticsCard
          rowStart={2}
          rowEnd={5}
          colStart={5}
          colEnd={9}
        />
        <StatisticsCard
          rowStart={5}
          rowEnd={8}
          colStart={1}
          colEnd={5}
        />
        <StatisticsCard
          rowStart={5}
          rowEnd={8}
          colStart={5}
          colEnd={9}
        />
        <GraphCard
          rowStart={8}
          rowEnd={13}
          colStart={1}
          colEnd={9}
        />
      </div>
    </Layout>
  )
}

export default Home