import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField } from "@mui/material"
import { AuthLayout} from "../auth/layout/AuthLayout"


export const LoginPage = () => {
  return (
    <AuthLayout title="Login">

          <form>
            <Grid container>
              <Grid item xs={ 12 } sx={{ mt:2}}>
                <TextField 
                label="Correo" 
                type="email" 
                placeholder="correo@google.com"
                fullWidth
                />
              </Grid>

              <Grid item xs={ 12 } sx={{ mt: 2}}>
                <TextField 
                label="Contraseña" 
                type="pasword" 
                placeholder="Contraseña"
                fullWidth
                />
              </Grid>

              <Grid container spacing={2} sx={{mb:2, mt: 1}}>
                <Grid>
                <Link component= {RouterLink} color="primary" to="/">
                  <Button variant="contained" justifyContent="center">
                    Login
                  </Button>
                </Link>
                </Grid>
            
              </Grid>

              <Grid container direction="row" justifyContent="end">
                <Link component= {RouterLink} color="primary" to="/register">
                Crear una cuenta
                </Link>
              </Grid>

            </Grid>

          </form>

    </AuthLayout>

  )
}
