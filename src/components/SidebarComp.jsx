"use client";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MenuContent from "./MenuContent";
import OptionsMenu from "./OptionsMenu";
import { useEffect, useState } from "react";
import { appwriteAccObj } from "@/utils/appwrite";
import { Skeleton } from "@mui/material";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

export default function SidebarComp() {
  const [userData, setUserData] = useState();
  useEffect(() => {
    appwriteAccObj.get().then((data) => setUserData(data));
  }, []);
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
        },
      }}
    >
      <Divider />
      <MenuContent />
      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Avatar
          sizes="small"
          alt={"Riley Carter" || userData?.name}
          sx={{ width: 36, height: 36 }}
        />
        {!userData ? (
          <div className="w-full">
            <Skeleton sx={{ fontSize: "1rem" }} />
          </div>
        ) : (
          <Box sx={{ mr: "auto" }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, lineHeight: "16px" }}
            >
              {userData?.name}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "text.secondary" }}
              className="truncate max-w-32"
              title={userData?.email}
            >
              {userData?.email}
            </Typography>
          </Box>
        )}
        <OptionsMenu />
      </Stack>
    </Drawer>
  );
}
