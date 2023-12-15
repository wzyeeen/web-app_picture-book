import * as React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../Particle';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { signIn } from './api/getInfo';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getInfo = async () => {
    try {
      const responseData = await signIn(email, password);
      console.log(responseData);
      localStorage.setItem('access_token', responseData.access_token);
      localStorage.setItem('refresh_token', responseData.refresh_token);
      window.open('/', '_self');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <CssVarsProvider>
          <main>
            {/* <ModeToggle /> */}
            <Sheet
              sx={{
                width: 300,
                mx: 'auto', // margin left & right
                my: 4, // margin top & bottom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRadius: 'sm',
                boxShadow: 'md',
              }}
              variant="outlined"
            >
              <div>
                <Typography level="h4" component="h1">
                  <b>Welcome!</b>
                </Typography>
                <Typography level="body-sm">Login to continue.</Typography>
              </div>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  // html input attribute
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="youremail@email.com"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  // html input attribute
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="password"
                />
              </FormControl>

              <Button
                as={Link}
                to="/"
                sx={{ mt: 1 /* margin top */ }}
                color='success'
                onClick={(event) => {
                  getInfo();
                  if (typeof Link === 'function') {
                    Link.handleClick(event);
                  }
                }}
              >
                Login
              </Button>

              <Typography
                endDecorator={<Link href="/signup" color='success'>Sign up</Link>}
                fontSize="sm"
                sx={{ alignSelf: 'center' }}
              >
                Don&apos;t have an account?
              </Typography>
            </Sheet>
          </main>
        </CssVarsProvider>
      </Container>
    </Container>
  );
}

export default Login;