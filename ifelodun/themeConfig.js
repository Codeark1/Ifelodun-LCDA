// themeConfig.ts
const themeConfig = {
    components: {
      Tabs: {
        itemColor: "#1D4ED8", // Default tab color
        itemHoverColor: "#2563EB", // Hover color
        itemActiveColor: "#9333EA", // Active tab color
        inkBarColor: "#9333EA", // Active indicator color
        horizontalItemPadding: "12px 24px", // Adjust padding
      },
      Card: {
        borderRadius: 8, // Rounded corners
        headerBg: "#F3F4F6", // Light gray header background
        headerColor: "#111827", // Dark text color
      },
      Modal: {
        contentBg: "#FFFFFF", // Modal background color
        headerBg: "#F3F4F6",
        headerColor: "#1D4ED8",
        titleFontSize: 18,
      },
    },
  };
  
  export default themeConfig;
  