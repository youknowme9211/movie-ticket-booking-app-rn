interface Spacing {
    space2: number;
    space4: number;
    space8: number;
    space10: number;
    space12: number;
    space15: number;
    space16: number;
    space17: number;
    space18: number;
    space19: number;
    space20: number;
    space24: number;
    space28: number;
    space32: number;
    space36: number;
}

export const SPACING: Spacing = {
    space2: 2,
    space4: 4,
    space8: 8,
    space10: 10,
    space12: 12,
    space15: 15,
    space16: 16,
    space17: 17,
    space18: 18,
    space19: 19,
    space20: 20,
    space24: 24,
    space28: 28,
    space32: 32,
    space36: 36,
};

interface Color {
    black: string;
    blackRGB10: string;
    orange: string;
    orangeRGB10: string;
    grey: string;
    darkGrey: string;
    yellow: string;
    white: string;
    whiteRGB75: string;
    whiteRGB50: string;
    whiteRGB32: string;
    whiteRGB15: string;
}

export const COLORS: Color = {
    black: "#000000",
    blackRGB10: "rgba(0,0,0,0.1)",
    orange: "#ff5524",
    orangeRGB10: "rgba(255,85,36,0.1)",
    grey: "#333333",
    darkGrey: "#0b0b0b",
    yellow: "#E1CD17",
    white: "#FFFFFF",
    whiteRGB75: "rgba(255,255,255,0.75)",
    whiteRGB50: "rgba(255,255,255,0.50)",
    whiteRGB32: "rgba(255,255,255,0.32)",
    whiteRGB15: "rgba(255,255,255,0.15)",
};

interface FontFamily {
    poppinsBlack: string;
    poppinsBold: string;
    poppinsExtraBold: string;
    poppinsExtraLight: string;
    poppinsLight: string;
    poppinsRegular: string;
    poppinsSemiBold: string;
    poppinsThin: string;
}

export const FONT_FAMILY: FontFamily = {
    poppinsBlack: "Poppins-Black",
    poppinsBold: "Poppins-Bold",
    poppinsExtraBold: "Poppins-ExtraBold",
    poppinsExtraLight: "Poppins-ExtraLight",
    poppinsLight: "Poppins-Light",
    poppinsRegular: "Poppins-Regular",
    poppinsSemiBold: "Poppins-SemiBold",
    poppinsThin: "Poppins-Thin",
};

interface FontSize {
    size8: number;
    size10: number;
    size12: number;
    size14: number;
    size16: number;
    size18: number;
    size20: number;
    size30: number;
}

export const FONT_SIZE: FontSize = {
    size8: 8,
    size10: 10,
    size12: 12,
    size14: 14,
    size16: 16,
    size18: 18,
    size20: 20,
    size30: 30,
};

interface BorderRadius {
    radius4: number;
    radius8: number;
    radius10: number;
    radius15: number;
    radius20: number;
    radius25: number;
}

export const BORDER_RADIUS: BorderRadius = {
    radius4: 4,
    radius8: 8,
    radius10: 10,
    radius15: 15,
    radius20: 20,
    radius25: 25,
};
