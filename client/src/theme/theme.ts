import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        brand: {
            main: '#eecc89',
            700: '#a48b73',

        }
    },

    styles: {
        global: {
            body: {
                color: '#2F4858' 
            }
        }
    }
});

export default theme;

// https://mycolor.space/?hex=%23EEC027&sub=1