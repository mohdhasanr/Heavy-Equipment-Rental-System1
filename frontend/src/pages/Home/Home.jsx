import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Header2 from '../../components/Header2/Header2'
import FeaturesBlock from '../../components/Featuresblock/Featuresblock'
import FreshMeatPage from '../../components/FreshMeatPage/FreshMeatPage'


const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
       
      <Header/>
   
      <Header2/>
      
      <ExploreMenu setCategory={setCategory} category={category}/>
    
      {/* <FoodDisplay category={category}/> */}
      <FreshMeatPage/>
      <FeaturesBlock/>
      <AppDownload/>
    </>
  )
}

export default Home
