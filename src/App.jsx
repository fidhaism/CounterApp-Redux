
import './App.css'
import Counter from './Counter'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
 
  return (
    <>
    <ChakraProvider>
      <Header />
      <Counter />
      <Footer />
      </ ChakraProvider>
    </>
  )
}

export default App
