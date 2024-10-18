import React from 'react'
import Button from "../components/ComponentIndex"
import Category from "../components/Category/Category"
import Brand from "../components/Brand/Brand"
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage"

const NFTDetails = () => {
  return (
    <div>
      <NFTDetailsPage/>
      <Category/>
      <Brand/>
    </div>
  )
}

export default NFTDetails