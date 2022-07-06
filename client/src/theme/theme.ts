import { extendTheme } from '@chakra-ui/react';

const activeStyle = {
    textDecor: 'none',
    bgColor: 'purple',
}

const theme = extendTheme({
    components: {
        Button: {
            variants: {
                outline: {
                    borderColor: 'primary.main',
                },
            },
        },

        Table: {
            parts: ['th', 'td'],
            baseStyle: {
                th: {
                    borderColor: 'purple',
                },
                td: {
                    borderColor: 'purple',
                },
            },
        },
    },

    fonts: {
        body: `'Trebuchet MS', sans-serif`,
        heading: `'Trebuchet MS', sans-serif`,
    },

    colors: {
        brand: {
            main: '#1F2933',
            100: '#C5D1DE',
            300: '#98A3AF',
            500: '#6D7783',
            600: '#2A343E',
            700: '#444E5A',
            800: '#0F1922',
            900: '#1F2933',
        },

        primary: {
            main: '#E49D22',
            100: '#E49D22',
            300: '#B97900',
            500: '#8F5600',
            700: '#693600',
            900: '#491600',
        }
    },

    styles: {
        global: {
            body: {
                color: 'primary.main'
            }
        }
    }
});

export default theme;

// https://mycolor.space/?hex=%23EEC027&sub=1

 // this one -> https://mycolor.space/?hex=%231F2933&sub=1
// https://mycolor.space/?hex=%23E49D22&sub=1