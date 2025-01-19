'use client'
/**
 * BaseLayout Component
 *
 * The BaseLayout component is responsible for providing a consistent layout structure
 * across the application, including a sticky header, main content area, and a responsive footer.
 * It ensures a uniform appearance and behavior for all pages wrapped in this layout.
 *
 * This component used as the main layout for pages or views that require
 * a standard header, content area, and footer. The layout adapts to both mobile and desktop views
 * with different footer designs for mobile and desktop screens.
 *
 * Usage:
 * - Wrap  page's content with the BaseLayout component to ensure consistent styling and layout.
 *
 * Props:
 * - children (React.ReactNode): The main content of the page, which will be rendered inside the layout.
 */
import { AppBar, Box,  CssBaseline, Toolbar, Typography } from "@mui/material";
import React from "react";
import theme from "@/theme"
import TopNavbar  from "@/components/layout/navbar/topNavbar";
import { ThemeProvider } from "@mui/material/styles";

const BaseLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  const { mode, background, text } = theme.palette;

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          {/* Header */}
          <AppBar
            position="sticky"
            sx={{
              background: mode === "dark" ? background.paper : background.default,
              zIndex: 1200, color: text.primary, width: "100%"
            }}
            enableColorOnDark
          >
            <Toolbar sx={{ padding: 1, flexDirection: "column" }}>
              <TopNavbar/>
            </Toolbar>
          </AppBar>
          {/* Content Area */}
          <Box
            component="main"
            sx={{
              flex: 1,
              background: background.default,
              padding: "0px",
              minHeight: 460,
            }}
          >
            {/*{path.pathname !== "/" && (*/}
            {/*  <Box*/}
            {/*    sx={{*/}
            {/*      mb: 2,*/}
            {/*      py: 1.5,*/}
            {/*      px: 2,*/}
            {/*      display: { xs: "none", md: "flex" },*/}
            {/*      alignItems: "center",*/}
            {/*      cursor: "pointer",*/}
            {/*      "&:hover": {*/}
            {/*        color: theme.palette.primary.main,*/}
            {/*      },*/}
            {/*    }}*/}
            {/*    onClick={handleOnBackClick}*/}
            {/*  >*/}
            {/*    Back*/}
            {/*  </Box>*/}
            {/*)}*/}
            {children}
          </Box>

          {/* Footer (Desktop) */}
          <Box
            sx={{
              textAlign: "center",
              background: background.default  ,
              display: { xs: "none", lg: "block" },
            }}
          >
            <Typography variant="body2" sx={{ padding: "16px" }}>
              Tasty Tales ©{new Date().getFullYear()} Powered by tHeDUo
            </Typography>
          </Box>

          {/* Footer (Mobile) */}
          <Box
            sx={{
              position: "sticky",
              bottom: 0,
              zIndex: 10,
              background: background.default,
              display: { lg: "none" },
            }}
          >
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default BaseLayout;
