import {
  DarkModeOutlined,
  Facebook,
  Instagram,
  KeyboardArrowDown,
  LightModeOutlined,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const options = ["AR", "EN"];

export default function HeaderSectionOne() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        bgcolor: "#2b3445",
        borderBottomRightRadius: "5px",
        borderBottomLeftRadius: "5px",
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "10px",
              fontWeight: "bold",
              borderRadius: "12px",
              p: "3px 10px",
              bgcolor: "#D23F57",
            }}
            variant="body2"
          >
            Hot
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#fff", fontWeight: 300, fontSize: "12px" }}
          >
            Free Express Shipping
          </Typography>

          <Box flexGrow={1} />

          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined fontSize="small" sx={{ color: "#fff" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined fontSize="small" />
              </IconButton>
            )}
          </div>

          <List component="nav" aria-label="languages">
            <ListItemButton
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="language"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{
                color: "#fff",
                padding: "0 !important",
              }}
            >
              <ListItemText
                primary={options[selectedIndex]}
                secondary={<KeyboardArrowDown sx={{ color: "#fff" }} />}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              />
            </ListItemButton>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "lock-button",
                role: "listbox",
              },
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          <Twitter sx={{ color: "#fff", fontSize: "20px" }} />
          <Facebook sx={{ color: "#fff", fontSize: "20px" }} />
          <Instagram sx={{ color: "#fff", fontSize: "20px" }} />
        </Stack>
      </Container>
    </Box>
  );
}
