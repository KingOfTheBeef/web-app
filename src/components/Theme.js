import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#efcc36',
            light: '#f3f5a0',
            dark: '#c67400',
            contrastText: '#000000',
        },
        secondary: {
            main: '#e36387',
            light: '#f2aaaa',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#ddf3f5',
        },
    },
});

export default theme;