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

        {/* <div
          className='w-full h-full col-span-3 row-span-1'
        >
          <h1
            className='text-3xl font-bold'
          >
            Hello {user.firstName}
          </h1>
        </div> */}

        <StatisticsCard
          rowStart={1}
          rowEnd={4}
          colStart={1}
          colEnd={5}
          icon={<svg  xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m4 8.09-1.29-1.3-1.42 1.42L4 10.91l4.71-4.7-1.42-1.42zM4 16.09l-1.29-1.3-1.42 1.42L4 18.91l4.71-4.7-1.42-1.42zM10 15h12v2H10zM10 7h12v2H10z"></path></svg>}
          title={"Answers Correct"}
          value={36}
          colour={"green"}
          percentageValue={12}
        />
        <StatisticsCard
          rowStart={1}
          rowEnd={4}
          colStart={5}
          colEnd={9}
          icon={<svg  xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M3 11h8v2H3zM3 6h14v2H3zM3 16h8v2H3zM19.12 13.46 17 15.59l-2.12-2.13-1.42 1.42L15.59 17l-2.13 2.12 1.42 1.42L17 18.41l2.12 2.13 1.42-1.42L18.41 17l2.13-2.12z"></path></svg>}
          title={"Answers Incorrect"}
          value={12}
          colour={"red"}
          percentageValue={6}
        />  
        <StatisticsCard
          rowStart={4}
          rowEnd={7}
          colStart={1}
          colEnd={5}
          icon={<svg  xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill={"currentColor"} viewBox="0 0 24 24"><path d="m14.58 11.19-7-5c-.31-.22-.71-.25-1.04-.08S6 6.62 6 7v10c0 .37.21.72.54.89.14.07.3.11.46.11.2 0 .41-.06.58-.19l7-5c.26-.19.42-.49.42-.81s-.16-.63-.42-.81M8 15.06V8.95l4.28 3.06L8 15.07ZM16 6h2v12h-2z"></path></svg>}
          title={"Answers Skipped"}
          value={4}
          colour={"orange"}
          percentageValue={-3}
        />
        <StatisticsCard
          rowStart={4}
          rowEnd={7}
          colStart={5}
          colEnd={9}
          icon={<svg  xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill={"currentColor"} viewBox="0 0 24 24"><path d="M4 2H2v19c0 .55.45 1 1 1h19v-2H4z"></path><path d="M11.25 10.28c.74-.06 1.45.24 1.93.8a4.314 4.314 0 0 0 7.03-.67l1.67-2.91-1.74-.99-1.67 2.91c-.38.66-1.03 1.08-1.79 1.16s-1.48-.22-1.98-.8c-.9-1.05-2.22-1.6-3.6-1.5s-2.6.84-3.34 2.02l-2.61 4.17 1.7 1.06 2.61-4.17c.4-.63 1.05-1.03 1.79-1.08"></path></svg>}
          title={"Overall performance"}
          value={"6%"}
          colour={"blue"}
          percentageValue={-3}
        />
        <GraphCard
          rowStart={7}
          rowEnd={13}
          colStart={1}
          colEnd={9}
        />
        <CurrentStreakCard
          rowStart={1}
          rowEnd={7}
          colStart={9}
          colEnd={13}
          icon={<svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m21,4h-3v-1c0-.55-.45-1-1-1H7c-.55,0-1,.45-1,1v1h-3c-.55,0-1,.45-1,1v3c0,4.29,1.79,6.88,4.81,6.99.88,1.52,2.4,2.62,4.19,2.92v2.09h-3v2h8v-2h-3v-2.09c1.79-.3,3.32-1.4,4.19-2.92,3.01-.11,4.81-2.7,4.81-6.99v-3c0-.55-.45-1-1-1ZM4,8v-2h2v6c0,.28.03.56.06.83-1.84-.71-2.06-3.52-2.06-4.83Zm12,4c0,2.21-1.79,4-4,4s-4-1.79-4-4V4h8v8Zm4-4c0,1.31-.22,4.12-2.06,4.83.04-.27.06-.55.06-.83v-6h2v2Z"></path></svg>}
          value={8}
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