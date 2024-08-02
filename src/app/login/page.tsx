"use client";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button, TextField, Container, Box, Typography } from "@mui/material";
import { useAppDispatch } from "../store/store";
import { setScreenId } from "../store/slices/screen.slice";
import { useTranslation } from 'react-i18next';
import LanguageSelector from '@/app/components/language.selector';
import GoogleIcon from '@mui/icons-material/Google';
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(setScreenId({ screenCode: "WBH000000: Login", screenName: "WBH000000: Login" }))
  }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent, auth: string) => {
    e.preventDefault();
    let result;
    if (auth === 'google') {
      result = await signIn("google");
    } else {
      result = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });
    }
    if (result?.error) {
      console.log(error)
      setError(result.error);
    } else {
      router.push("/dashboard");
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >




        <Box component="form" onSubmit={(e) => handleSubmit(e, 'credentials')} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            data-testid="input-username"
            label={t('username')}
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label={t('password')}
            type="password"
            id="password"
            data-testid="input-password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            data-testid="btn-sign-in"
          >
            {t('signIn')}
          </Button>

        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        gap={2}
        sx={{ padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}
      >
        <LanguageSelector />
        <Button
          variant="contained"
          color="primary"
          startIcon={<GoogleIcon />}
          onClick={() => signIn('google')}
          sx={{ borderRadius: 20, textTransform: 'none' }}
        >
          Sign in with Google
        </Button>


      </Box>

    </Container>
  );
};


export default Login;
