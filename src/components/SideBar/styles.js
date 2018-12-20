import {createMuiTheme} from '@material-ui/core/styles'

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#673ab7',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
    typography: {
        useNextVariants: true,
    },
});

export const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
}