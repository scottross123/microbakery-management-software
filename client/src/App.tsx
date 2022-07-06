import { ChakraProvider, Flex, Text, } from "@chakra-ui/react"
import Sidebar from "./components/sidebar/Sidebar";
import RouterProvider from "./routes/RouterProvider";
import theme from './theme/theme';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();
 
export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Flex
            className="app"
          h='100vh'
          flexDir='row'
          backgroundColor='brand.800'
        >
          <Sidebar/>

          <Flex
              className="app-content"
            w='85%'
            flexDir='column'
          >


            <Flex
              justifyContent='center'
              alignItems='flex-start'
              h='100%'
              overflowY='auto'
            >
              <RouterProvider/>
            </Flex>
          </Flex>
        </Flex>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
