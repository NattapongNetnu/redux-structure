import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/IconButton'
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from '@material-ui/icons/Menu'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { styles, theme } from './styles'

class SideBar extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root} >
                <MuiThemeProvider theme={theme}>
                    <AppBar position="static" color="primary">
                        <Toolbar>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                News
                        </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default withStyles(styles)(SideBar)