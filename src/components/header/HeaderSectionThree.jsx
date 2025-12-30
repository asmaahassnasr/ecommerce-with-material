import {
  Close,
  ElectricBikeOutlined,
  ExpandMore,
  KeyboardArrowRightOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  SportsEsportsOutlined,
} from "@mui/icons-material";
import WindowIcon from "@mui/icons-material/Window";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Accordion,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import HeadeLinks from "./HeadeLinks";

const staticLinks = [
  {
    title: "Home",
    subLinks: ["Link1", "Link2", "Link3"],
  },
  {
    title: "Mega Menue",
    subLinks: ["Link1", "Link2", "Link3"],
  },
  {
    title: "Full Screen Menue",
    subLinks: ["Link1", "Link2", "Link3"],
  },
  {
    title: "Pages",
    subLinks: ["Link1", "Link2", "Link3"],
  },
  {
    title: "User Account",
    subLinks: ["Link1", "Link2", "Link3"],
  },
  {
    title: "Vendor Account",
    subLinks: ["Link1", "Link2", "Link3"],
  },
];

export default function HeaderSectionThree() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container sx={{ my: 2 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Button
            sx={{
              color: theme.palette.text.primary,
              borderRadius: "10px",
              p: 1.5,
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
              width: "20vw",
            }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <WindowIcon />
            <Typography sx={{ ml: 1, textTransform: "capitalize", p: 0 }}>
              Categories
            </Typography>
            <Box flexGrow={1} />
            <KeyboardArrowRightOutlined />
          </Button>

          <Menu
            sx={{
              ".MuiPaper-root": {
                width: "265px",
                // @ts-ignore
                bgcolor: theme.palette.myColor.main,
              },
            }}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ElectricBikeOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>Bikes </ListItemText>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <LaptopChromebookOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>Electronics </ListItemText>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <MenuBookOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>Books</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <SportsEsportsOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>Games</ListItemText>
            </MenuItem>
          </Menu>
        </Box>

        {useMediaQuery("(min-width:1000px)") && (
          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <HeadeLinks title="Home" />
            <HeadeLinks title="Mega Menue" />
            <HeadeLinks title="Full Screen Menue" />
            <HeadeLinks title="Pages" />
            <HeadeLinks title="User Account" />
            <HeadeLinks title="Vendor Account" hasLinks={false} />
          </Stack>
        )}

        {useMediaQuery("(max-width:1000px)") && (
          <IconButton onClick={toggleDrawer("top", true)}>
            <MenuIcon sx={{ fontSize: "30px !important" }} />
          </IconButton>
        )}

        <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          sx={{
            ".css-k1yagv-MuiPaper-root-MuiDrawer-paper": { height: "100%" },
          }}
        >
          <Box
            sx={{
              width: "50vw",
              mx: "auto",
              mt: 8,
              position: "relative",
              padding: 3,
            }}
          >
            <IconButton
              onClick={toggleDrawer("top", false)}
              sx={{
                ":hover": { color: "red", rotate: "180deg", transition: ".3s" },
                position: "absolute",
                top: 0,
                right: 10,
              }}
            >
              <Close fontSize="large" />
            </IconButton>

            {staticLinks.map((ele) => {
              return (
                <Accordion
                  key={ele.title}
                  elevation={0}
                  sx={{ bgcolor: "initial", mt: 1 }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">{ele.title}</Typography>
                  </AccordionSummary>
                  <List sx={{ py: 0, my: 0 }}>
                    {ele.subLinks.map((sublink) => {
                      return (
                        <ListItem key={sublink} sx={{ py: 0, my: 0 }}>
                          <ListItemButton>
                            <ListItemText primary={sublink}></ListItemText>
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Accordion>
              );
            })}
          </Box>
        </Drawer>
      </Stack>
    </Container>
  );
}
