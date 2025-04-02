import { useState } from "react"
import "./assets/style.css"
import ProfileCard from "./components/ProfileCard"
import TheatreCard from "./components/TheatreCard"
import { Route, Routes } from "react-router-dom"
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Contact from "../src/pages/Contact"
import Navbar from "./components/Navbar"

export default function App() {

  return (<>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movie" element={<TheatreCard />} />
        <Route path="/profile" element={<ProfileCard />} />
      </Routes>
  </>
  )
}
