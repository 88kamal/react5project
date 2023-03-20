import React from 'react'
import Bmi from './Components/BMICalculator'
import Carousel from './Components/Carousel'
import Faq from './Components/FAQ'
import GitHubUserSearch from './Components/GitHubUserSearch'
import ShopingList from './Components/ShoppingList'

function App() {
  return (
    <div>
      <Carousel/>
      <Faq/>
      <ShopingList/>
      <GitHubUserSearch/>
      <Bmi/>
    </div>
  )
}

export default App