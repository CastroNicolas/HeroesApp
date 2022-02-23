import { Route, Routes } from "react-router-dom"
import { DcSreen } from "../Components/Dc/DcSreen"
import { HeroesScreen } from "../Components/Hero/HeroesScreen"
import { MarvelScreen } from "../Components/Marvel/MarvelScreen"
import { SearchScreen } from "../Components/search/SearchScreen"
import { Navbar } from "../Components/ui/NavBar"


export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>
          <div className="container">
            <Routes>
              <Route path="marvel" element={< MarvelScreen/>} />
              <Route path="Dc" element={<DcSreen/>} />
       
              <Route path="search" element={<SearchScreen/>} />
              <Route path="Hero/:heroeId" element={<HeroesScreen/>} />

              <Route path="/" element={< MarvelScreen/>} />
            </Routes>
          </div>
    </>
  )
}
