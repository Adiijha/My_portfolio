import React from 'react'
import Header from './layout/Header'
import Front from './Front'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './layout/Footer'
import Technologies from './Technologies'

function Home() {
  return (
    <div className="min-h-screen bg-black font-sans">
      <Header />
      <main>
        <Front />
        <Projects />
        <Technologies/>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home