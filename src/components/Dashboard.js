import { Container } from '@mui/system'
import React from 'react'
import MiniDrawer from './Home'

const Dashboard = () => {
  return (
    <>
      <MiniDrawer />
      <Container style={{ marginTop: "100px" }}>
        <h1 style={{ textAlign: "center" }}>Why we use React-Query?</h1>
        <p>React Query is often described as the missing data-fetching library for React, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your React applications a breeze.</p>
        <div>
          <p>While most traditional state management libraries are great for working with client state, they are not so great at working with async or server state. This is because server state is totally different. For starters, server state:</p>
          <ul>
            <li>Is persisted remotely in a location you do not control or own</li>
            <li>Requires asynchronous APIs for fetching and updating</li>
            <li>Implies shared ownership and can be changed by other people without your knowledge</li>
            <li>Can potentially become "out of date" in your applications if you're not careful</li>
          </ul>
        </div>
        <div>
          <p>Once you grasp the nature of server state in your application, even more challenges will arise as you go, for example:</p>
          <ul>
            <li>Caching... (possibly the hardest thing to do in programming)</li>
            <li>Deduping multiple requests for the same data into a single reques</li>
            <li>Updating "out of date" data in the background</li>
            <li>Knowing when data is "out of date"</li>
            <li>Reflecting updates to data as quickly as possible</li>
            <li>Performance optimizations like pagination and lazy loading data</li>
            <li>Managing memory and garbage collection of server state</li>
            <li>Memoizing query results with structural sharing</li>
          </ul>
        </div>
      </Container>
    </>
  )
}

export default Dashboard