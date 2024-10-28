interface Spacing {
    space__2: number;
    space__4: number;
    space__8: number;
    space__10: number;
    space__12: number;
    space__15: number;
    space__16: number;
    space__17: number;
    space__18: number;
    space__19: number;
    space__20: number;
    space__24: number;
    space__28: number;
    space__32: number;
    space__36: number;
};

export const SPACING: Spacing = {
    space__2: 2,
    space__4: 4,
    space__8: 8,
    space__10: 10,
    space__12: 12,
    space__15: 15,
    space__16: 16,
    space__17: 17,
    space__18: 18,
    space__19: 19,
    space__20: 20,
    space__24: 24,
    space__28: 28,
    space__32: 32,
    space__36: 36,
};

interface Color {
    Black: string;
    BlackRGB10: string;
    Orange: string
    OrangeRGB10: string
    Grey: string,
    DarkGrey: string,
    Yellow: string,
    White: string,
    WhiteRBG75: string,
    WhiteRBG50: string,
    WhiteRBG32: string,
    WhiteRBG15: string,
};
export const COLORS: Color = {
    Black: "#000000",
    BlackRGB10: 'rgba(0,0,0,0.1)',
    Orange: "#ff5524",
    OrangeRGB10: 'rgba(255,85,36,0)',
    Grey: "#333333",
    DarkGrey: '#0b0b0b',
    Yellow: "#E1CD17",
    White: "#FFFFFF",
    WhiteRBG75: "rgba(255,255,255,0.75)",
    WhiteRBG50: "rgba(255,255,255,0.50)",
    WhiteRBG32: "rgba(255,255,255,0.32)",
    WhiteRBG15: "rgba(255,255,255,0.15)",
};


interface FontFamily {
    poppins_black: string;
    poppins_bold: string;
    poppins_extrabold: string;
    poppins_extralight: string;
    poppins_light: string;
    poppins_regular: string;
    poppins_semibold: string;
    poppins_thin: string;
};

export const FONTFAMILY: FontFamily = {
    poppins_black: 'Poppins-Black',
    poppins_bold: 'Poppins-Bold',
    poppins_extrabold: 'Poppins-Extrabold',
    poppins_extralight: 'Poppins-Extralight',
    poppins_light: 'Poppins-Light',
    poppins_regular: 'Poppins-Regular',
    poppins_semibold: 'Poppins-Semibold',
    poppins_thin: 'Poppins-Thin',
};


interface FontSize {
    size_8: number;
    size_10: number;
    size_12: number;
    size_14: number;
    size_16: number;
    size_18: number;
    size_20: number;
    size_30: number;
};

export const FONTSIZE: FontSize = {
    size_8: 8,
    size_10: 10,
    size_12: 12,
    size_14: 14,
    size_16: 16,
    size_18: 18,
    size_20: 20,
    size_30: 30,
};
 
interface BorderRadius{
    radius_4:number;
    radius_8:number;
    radius_10:number;
    radius_15:number;
    radius_20:number;
    radius_25:number;
};


export const BORDERRADIUS:BorderRadius={
    radius_4:4,
    radius_8:8,
    radius_10:10,
    radius_15:15,
    radius_20:20,   
    radius_25:25,
};