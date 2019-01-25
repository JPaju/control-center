import { createMuiTheme } from '@material-ui/core/styles';
import { blue, yellow } from '@material-ui/core/colors';

export default createMuiTheme({
    palette: {
        primary: blue,
        secondary: yellow
    },
    spacing: {
        unit: 5
    },
    typography: {
        useNextVariants: true,
        headings: {
            fontSize: 15,
        }
    },
})