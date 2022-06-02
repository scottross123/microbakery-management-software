import { ChakraProvider } from "@chakra-ui/react"
import Sidebar from "./components/Sidebar";

export const App = () => (
  <ChakraProvider>
    <Sidebar/>
  </ChakraProvider>
)
