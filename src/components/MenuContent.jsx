import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon />, href: "/appHome" },
  { text: "Search", icon: <SearchIcon />, href: "/appHome/search" },
  { text: "Playlists", icon: <QueueMusicIcon />, href: "/appHome/playlists" },
  //   { text: "Tasks", icon: <AssignmentRoundedIcon /> },
];

export default function MenuContent() {
  const path = usePathname();
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <Link href={item.href}>
              <ListItemButton selected={item.href === path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
