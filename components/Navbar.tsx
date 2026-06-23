"use client";
import { useState, useEffect } from "react";
import {
  AppBar, Box, Toolbar, Typography, Button, Container,
  IconButton, Drawer, List, ListItem, ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Maps homepage section IDs → the nav href they correspond to
const HOME_SECTIONS: { id: string; href: string }[] = [
  { id: "about", href: "/about" },
  { id: "practice-areas", href: "/practice-areas" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Representative Matters", href: "/representative-matters" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ onBooking }: { onBooking?: () => void }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  const isHome = pathname === "/";

  // Scroll-spy: on the homepage, watch sections and update active nav link
  useEffect(() => {
    if (!isHome) { setActiveSection(null); return; }

    const observers: IntersectionObserver[] = [];

    HOME_SECTIONS.forEach(({ id, href }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(href);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    // Reset to Home when back near the top
    const heroObs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActiveSection(null); },
      { threshold: 0.1 }
    );
    const hero = document.getElementById("hero");
    if (hero) { heroObs.observe(hero); observers.push(heroObs); }

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#0A1628",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1.5, minHeight: 70 }}>
            {/* Logo */}
            <Box
              component={Link}
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                textDecoration: "none",
                flexGrow: 1,
              }}
            >
              <Image
                src="/logo.png"
                alt="Lakhani Law, PLLC"
                width={120}
                height={60}
                style={{ objectFit: "contain" }}
                priority
              />
            </Box>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
              {navLinks.map((link) => {
                const active = isHome
                ? (activeSection === link.href || (activeSection === null && link.href === "/"))
                : pathname === link.href;
                return (
                  <Button
                    key={link.label}
                    component={Link}
                    href={link.href}
                    sx={{
                      color: active ? "white" : "rgba(255,255,255,0.7)",
                      fontWeight: active ? 600 : 400,
                      fontSize: "0.85rem",
                      px: 1.5,
                      py: 1,
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "white",
                      },
                      borderBottom: active ? "2px solid white" : "2px solid transparent",
                      borderRadius: 0,
                    }}
                  >
                    {link.label}
                  </Button>
                );
              })}
              <Button
                variant="contained"
                onClick={onBooking}
                sx={{
                  ml: 2,
                  backgroundColor: "white",
                  color: "#0A1628",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  px: 2.5,
                  py: 1,
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.85)" },
                }}
              >
                Schedule Consultation
              </Button>
            </Box>

            {/* Mobile */}
            <IconButton
              sx={{
                display: { xs: "flex", md: "none" },
                color: "white",
              }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
            <Image src="/logo.png" alt="Lakhani Law, PLLC" width={100} height={50} style={{ objectFit: "contain" }} />
            <IconButton onClick={() => setDrawerOpen(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
          <List sx={{ flex: 1 }}>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    borderRadius: 1,
                    color: pathname === link.href ? "primary.main" : "text.primary",
                    fontWeight: pathname === link.href ? 600 : 400,
                  }}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button
            fullWidth
            variant="contained"
            onClick={() => { setDrawerOpen(false); onBooking?.(); }}
            sx={{ mt: 2, backgroundColor: "#0A1628", color: "white", fontWeight: 700, "&:hover": { backgroundColor: "#162440" } }}
          >
            Schedule Consultation
          </Button>
        </Box>
      </Drawer>

    </>
  );
}
