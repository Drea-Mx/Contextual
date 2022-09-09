import React from "react"
import { Normalizer } from "../styles/Normalizer"
import { Typography } from "../styles/Typography"
import Header from "./header"
import Footer from "./footer"



function Layout({ children, query, setQuery }) {


  return (
    <>
      <Normalizer />
      <Typography />
      <Header query={query} setQuery={setQuery} />
      <main>{children}</main>
      <Footer />
    </>
  )
}


export default Layout