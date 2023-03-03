import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout} from "../auth/layout/AuthLayout"


export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">

          <form>
            <Grid container>
              <Grid item xs={ 12 } sx={{ mt:2}}>
                <TextField 
                label="Nombre completo" 
                type="text" 
                placeholder="Nombre completo"
                fullWidth
                />
              </Grid>

              <Grid item xs={ 12 } sx={{ mt:2}}>
                <TextField 
                label="Correo" 
                type="email" 
                placeholder="correo@google.com"
                fullWidth
                />
              </Grid >

              <Grid item xs={ 12 } sx={{ mt: 2}}>
                <TextField 
                label="Contraseña" 
                type="pasword" 
                placeholder="Contraseña"
                fullWidth
                />
              </Grid>

              <Grid container spacing={2} sx={{mb:2, mt: 1}}>
                <Grid container direction="row" justifyContent="end">
                  <Button variant="contained" fullWidth>
                    Crear cuenta
                  </Button>
                </Grid>

              </Grid>

              <Grid container direction="row" justifyContent="end">
                <Typography sx={{mr:1}} color="black">Ya tienes cuenta?</Typography>
                <Link component= {RouterLink} color="primary" to="/login">
                  Ingresar
                </Link>
              </Grid>

            </Grid>

          </form>

    </AuthLayout>

  )
}