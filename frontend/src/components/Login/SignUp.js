import * as React from 'react';
import { useState } from 'react';
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import axios from 'axios';
import { useNavigate } from "react-router-dom"


function SignUp() {
  const navigate = useNavigate();
  // Sign up API
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const getInfo = () => {
    const data = { username: email, password: password };
    axios.post('https://web-app-backend-r3ac.onrender.com/register', data)
      .then(res => {
        console.log(res.data);
        navigate("/");
      })
      .catch(error => {
        console.error('Error:', error);
      });
    console.log(data);
  };

  // Sign up Page
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
                <FormLabel>Email</FormLabel>
                <Input
                  // html input attribute
                  id="email"
                  type="email"
                  placeholder="johndoe@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  // html input attribute
                  id="password"
                  type="password"
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


