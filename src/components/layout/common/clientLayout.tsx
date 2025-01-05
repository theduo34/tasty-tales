'use client';

import {CacheProvider} from "@emotion/react";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "@/theme";
import createEmotionCache from '@/utils/createEmotionCache';

const emotionCache = createEmotionCache();

const ClientLayout = ({children}: {
  children: React.ReactNode;
}) => {
  return(
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  )
}
export default ClientLayout;