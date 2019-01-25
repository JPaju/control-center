import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

export default createMuiTheme({
    palette: {
        primary: blue
    },
    typography: {
        useNextVariants: true,
        headings :{
            fontSize: 15,
        }
    },
});