import { ChakraProvider } from "@chakra-ui/react"
import Sidebar from "./components/sidebar/Sidebar";

export const App = () => (
  <ChakraProvider>
    <Sidebar/>
  </ChakraProvider>
)
