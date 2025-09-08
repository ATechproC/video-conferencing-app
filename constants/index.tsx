import home from "../public/icons/Home.svg"
import upcoming from "../public/icons/upcoming.svg"
import previous from "../public/icons/previous.svg"
import recording from "../public/icons/recordings.svg"
import personalRoom from "../public/icons/add-personal.svg"
import yoomLogo from "../public/icons/yoom-logo.svg"

export const assets = {
    home, upcoming, previous, recording, personalRoom,yoomLogo
}

export const sideBarLinks = [
    {
        label : "Home",
        rout : "/",
        icon : assets.home,
    }, 
    {
        label : "Upcoming",
        rout : "/upcoming",
        icon : assets.upcoming,
    }, 
    {
        label : "Previous",
        rout : "/previous",
        icon : assets.previous,
    }, 
    {
        label : "Recording",
        rout : "/recording",
        icon : assets.recording,
    },
    {
        label : "Personal Room",
        rout : "/personal-room",
        icon : assets.personalRoom,
    }, 
]