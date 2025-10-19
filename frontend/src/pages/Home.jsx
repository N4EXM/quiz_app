import React from 'react'
import Layout from '../components/Layout'
import StatisticsCard from '../components/Home/StatisticsCard'
import GraphCard from '../components/Home/GraphCard'
import SavedTopics from '../components/Home/SavedTopics'
import CurrentStreakCard from '../components/Home/CurrentStreakCard'
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
          icon={<svg  xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m4 8.09-1.29-1.3-1.42 1.42L4 10.91l4.71-4.7-1.42-1.42zM4 16.09l-1.29-1.3-1.42 1.42L4 18.91l4.71-4.7-1.42-1.42zM10 15h12v2H10zM10 7h12v2H10z"></path></svg>}
          title={"Answers Correct"}
          value={36}
          colour={"green"}
          percentageValue={12}
        />
        <StatisticsCard
          rowStart={2}
          rowEnd={5}
          colStart={5}
          colEnd={9}
          icon={<svg  xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M3 11h8v2H3zM3 6h14v2H3zM3 16h8v2H3zM19.12 13.46 17 15.59l-2.12-2.13-1.42 1.42L15.59 17l-2.13 2.12 1.42 1.42L17 18.41l2.12 2.13 1.42-1.42L18.41 17l2.13-2.12z"></path></svg>}
          title={"Answers Incorrect"}
          value={12}
          colour={"red"}
          percentageValue={6}
        />  
        <StatisticsCard
          rowStart={5}
          rowEnd={8}
          colStart={1}
          colEnd={5}
          icon={<svg  xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m14.58 11.19-7-5c-.31-.22-.71-.25-1.04-.08S6 6.62 6 7v10c0 .37.21.72.54.89.14.07.3.11.46.11.2 0 .41-.06.58-.19l7-5c.26-.19.42-.49.42-.81s-.16-.63-.42-.81M8 15.06V8.95l4.28 3.06L8 15.07ZM16 6h2v12h-2z"></path></svg>}
          title={"Answers Skipped"}
          value={4}
          colour={"orange"}
          percentageValue={-3}
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
        <CurrentStreakCard
          rowStart={2}
          rowEnd={7}
          colStart={9}
          colEnd={13}
        />
        <SavedTopics
          rowStart={7}
          rowEnd={13}
          colStart={9}
          colEnd={13}
        />
      </div>
    </Layout>
  )
}

export default Home