let Home = require("../../Assets/Images/dashboard.png")
let logout = require("../../Assets/Images/logout.png")
let profile = require("../../Assets/Images/profile.png")
let Settings = require("../../Assets/Images/about.png")

export let SideMenuData = {
    Menu:[
        { name: "Home", imgName: Home, stackName: "MyDrawer", screen: "Home", id: 0, active: true },
        { name: "Settings", imgName: Settings, stackName: 'MyDrawer', screen: "Settings", id: 1, active: false },
        { name: "Profile", imgName: profile, stackName: 'MyDrawer', screen: "Profile", id: 2, active: false },
        { name: "Clear Data", imgName: logout, id: 3, active: false },

    ]

}