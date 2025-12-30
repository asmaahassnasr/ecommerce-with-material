import {
  ExpandMore,
  KeyboardArrowDown,
  PersonOutlineOutlined,
  ShoppingCart,
} from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { styled, alpha, useTheme } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.6,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    border: "1px solid #333",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const options = ["Al Categories ", "Cars", "Clothes", "Electronics"];

export default function HeaderSectionTwo() {
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
    <Container sx={{ my:2, display: "flex", justifyContent: "space-between" }}>
      <Stack alignItems={"center"}>
        <ShoppingCart />
        <Typography variant="body2">E-Commerce</Typography>
      </Stack>

      <Search sx={{ borderRadius: "22px", display: "flex" }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />

        <List
          sx={{
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
            borderTopRightRadius: "22px",
            borderBottomRightRadius: "22px",
            width: "40%",
            alignItems: "center",
            textAlign: "center",
          }}
          component="nav"
          aria-label="languages"
        >
          <ListItemButton
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="language"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
            sx={{
              color: theme.palette.text.primary,
              padding: "0 !important",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <ListItemText primary={options[selectedIndex]} />
            <ExpandMore sx={{ marginRight: "15px" }} fontSize={"medium"} />
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
      </Search>

      <Stack direction={"row"} alignItems={"center"} gap={2}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCart />
          </StyledBadge>
        </IconButton>

        <IconButton>
          <PersonOutlineOutlined />
        </IconButton>
      </Stack>
    </Container>
  );
}
