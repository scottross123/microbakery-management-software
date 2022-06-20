import { ChakraProvider, Flex, Text, } from "@chakra-ui/react"
import Sidebar from "./components/sidebar/Sidebar";
import  Topbar from "./components/topbar/Topbar";
import RouterProvider from "./routes/RouterProvider";
import theme from './theme/theme';
 
export const App = () => {
  

  return (
    <ChakraProvider theme={theme}>
      <Flex
        h='100vh'
        flexDir='row'
      >
        <Sidebar/>

        <Flex
          w='85%'
          flexDir='column'
        >

          <Topbar />

          <Flex
           justifyContent='center'
           alignItems='flex-start'
           h='100%'
           overflowY='scroll'
          >
            <RouterProvider/>
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
