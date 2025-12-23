import { Stack } from "@mui/material";
import HeaderSectionOne from "./HeaderSectionOne";
import HeaderSectionTwo from "./HeaderSectionTwo";
import HeaderSectionThree from "./HeaderSectionThree";

export default function Header() {
  return (
    <div>
        <Stack>
            <HeaderSectionOne />
            <HeaderSectionTwo />
            <HeaderSectionThree />
        </Stack>
    </div>
  )
}
