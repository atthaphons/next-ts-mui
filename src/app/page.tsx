"use client";
import { useSession, signOut, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button, Typography, Container, Box } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


const Home = () => {
  const { t } = useTranslation();
  console.log('T home ', t)
  const { data: session, status } = useSession();
  console.log("status :", status);
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <Container component="main" maxWidth="xs">

      <div>
        <h1>Welcome to My Next.js App</h1>
        {session ? (
          <>
            <p>Signed in as {session.user?.email}</p>
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
            <p>Not signed in</p>
            <button onClick={() => signIn('google')}>Sign in with Google</button>
            <button onClick={() => signIn('credentials')}>Sign in with Credentials</button>
          </>
        )}
      </div>


      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {t('home')}
        </Typography>
        <Typography>Welcome, {session?.user?.name}</Typography>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => signOut()}
        >

          {t('singOut')}
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
