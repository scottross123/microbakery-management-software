import { ChakraProvider, Flex } from "@chakra-ui/react"
import Sidebar from "./components/sidebar/Sidebar";
import  Topbar from "./components/topbar/Topbar";
import RouterProvider from "./routes/RouterProvider";

export const App = () => {
  

  return (
    <ChakraProvider>
      <Flex
        h='100vh'
        flexDir='row'
        overflow='hiden'
      >
        <Sidebar/>

        <Flex
          w='85%'
          flexDir='column'
        >
          <Topbar />

          <RouterProvider />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
