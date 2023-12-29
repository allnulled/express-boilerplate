export default (components) => {
    return [
        {
            name: "About-us",
            path: "/about-us",
            component: components.AboutPage,
        },
        {
            name: "Engagement",
            path: "/engagement",
            component: components.EngagementPage,
        },
        {
            name: "Settings",
            path: "/settings",
            component: components.SettingsPage,
        },
        {
            name: "Contact",
            path: "/contact",
            component: components.ContactPage,
        },
        {
            name: "Zcomponents",
            path: "/zcomponents",
            component: components.ZcomponentsSamplePage,
        },
        {
            name: "Registration",
            path: "/register",
            component: components.RegistrationPage,
        },
        {
            name: "Forgot-password",
            path: "/forgot",
            component: components.ForgotPage,
        },
        {
            name: "Recover-password",
            path: "/recover/:token",
            component: components.RecoverPage,
        },
        {
            name: "Home",
            path: "/",
            alias: "/home",
            component: components.HomePage,
        },
    ];
}