import { ChakraProvider, Flex } from "@chakra-ui/react"
import Sidebar from "./components/sidebar/Sidebar";
import  Topbar from "./components/topbar/Topbar";
import Home from './pages/Home';

export const App = () => (
  <ChakraProvider>
    <Flex
     h='100vh'

     flexDir='row'
     overflow='hiden'
    >
      <Sidebar/>

      <Flex
       className='bruh'
       w='85%'
       flexDir='column'
      >
        <Topbar page={'Home'}/>

        <Home/>
      </Flex>
    </Flex>
  </ChakraProvider>
)
