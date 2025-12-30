import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

export default function HeadeLinks({ title, hasLinks = true }) {
  return (
    <Box
      sx={{
        ":hover .show-sub-menue": { display: "block" },
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography> {title} </Typography>
      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />
      <Box
        className="show-sub-menue"
        sx={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          minWidth: "150px",
          display: "none",
        }}
      >
        <Paper sx={{ mt: 2 }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px !important",
                        fontWeight: 300,
                      },
                    }}
                    primary="Dashboard"
                  />
                  <Box flexGrow={1}></Box>
                </ListItemButton>
              </ListItem>

              <ListItem
                disablePadding
                sx={{
                  "&:hover .sub-link": { display: "block" },
                  position: "relative",
                }}
              >
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px !important",
                        fontWeight: 300,
                      },
                    }}
                    primary="Products"
                  />
                  <Box flexGrow={1}></Box>
                  <KeyboardArrowRightOutlined />
                </ListItemButton>

                {hasLinks && (
                  <Box
                    className="sub-link"
                    sx={{
                      position: "absolute",
                      top: "0",
                      left: "100%",
                      minWidth: "150px",
                      display: "none",
                    }}
                  >
                    <Paper sx={{ ml: 1 }}>
                      <nav aria-label="secondary mailbox folders">
                        <List>
                          <ListItem disablePadding>
                            <ListItemButton
                              sx={{ display: "flex", p: 0, px: 1.5 }}
                            >
                              <ListItemText
                                sx={{
                                  "& .MuiTypography-root": {
                                    fontSize: "15px !important",
                                    fontWeight: 300,
                                  },
                                }}
                                primary="Prod 001"
                              />
                              <Box flexGrow={1}></Box>
                            </ListItemButton>
                          </ListItem>

                          <ListItem disablePadding>
                            <ListItemButton
                              sx={{ display: "flex", p: 0, px: 1.5 }}
                            >
                              <ListItemText
                                sx={{
                                  "& .MuiTypography-root": {
                                    fontSize: "15px !important",
                                    fontWeight: 300,
                                  },
                                }}
                                primary="Prod 002"
                              />
                              <Box flexGrow={1}></Box>
                            </ListItemButton>
                          </ListItem>

                          <ListItem disablePadding>
                            <ListItemButton
                              sx={{ display: "flex", p: 0, px: 1.5 }}
                            >
                              <ListItemText
                                sx={{
                                  "& .MuiTypography-root": {
                                    fontSize: "15px !important",
                                    fontWeight: 300,
                                  },
                                }}
                                primary="Prod 003"
                              />
                              <Box flexGrow={1}></Box>
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </nav>
                    </Paper>
                  </Box>
                )}
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px !important",
                        fontWeight: 300,
                      },
                    }}
                    primary="Orders"
                  />
                  <Box flexGrow={1}></Box>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px !important",
                        fontWeight: 300,
                      },
                    }}
                    primary="Profile"
                  />
                  <Box flexGrow={1}></Box>
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
}
