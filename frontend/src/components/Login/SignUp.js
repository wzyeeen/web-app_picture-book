import * as React from 'react';
import { useState } from 'react';
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { signUp } from './api/getInfo';


function SignUp() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const getInfo = async () => {
    try {
      const responseData = await signUp(user, password);
      console.log(responseData);
      localStorage.setItem('username', user);
      alert('Welcome! Please login to continue.');
      window.open('/', '_self');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <CssVarsProvider>
          <main>
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
                marginBottom: '350px'
              }}
              variant="outlined"
            >
              <div>
                <Typography level="h4" component="h1">
                  <b>Welcome!</b>
                </Typography>
                <Typography level="body-sm">Sign up to continue.</Typography>
              </div>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                  // html input attribute
                  placeholder="username"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  // html input attribute
                  type='password'
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button sx={{ mt: 1 /* margin top */ }} color='success' onClick={getInfo}>Sign up for free</Button>
              <Typography
                endDecorator={<Link href="/" color='success'>Sign in</Link>}
                fontSize="sm"
                sx={{ alignSelf: 'center' }}
              >
                Already have an account?
              </Typography>
            </Sheet>
          </main>
        </CssVarsProvider>
      </Container>
    </Container>
  );

}
export default SignUp;


