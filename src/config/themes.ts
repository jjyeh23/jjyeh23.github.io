import type { Theme, ThemeColors, ThemeName } from "../types/themes";

export { type Theme, type ThemeName, type ThemeColors };

// research-specific colors
export const RESEARCH_COLORS = {
    environment: "#315C48",    // forest
    ecology: "#71845C",        // lichen
    phenology: "#C99532",      // golden ochre
    remoteSensing: "#789DA0",  // atmospheric blue
    astrobiology: "#B65D43",   // terracotta
} as const;

export const THEMES: Record<string, Theme> = {
    light_default: {
        background: "#F6F5EF",
        foreground: "#18231F",
        accent: "#315C48",
        muted: "#71845C",
        border: "#D8D6CC",
        surface: "#FCFBF7",
        isDark: false,
    },
    
    dark_default: {
        background: "#18231F",
        foreground: "#F6F5EF",
        accent: "#71845C",
        muted: "#A5B09F",
        border: "#3A493F",
        surface: "#202D26",
        isDark: true,
    },
    
    light_notepad: {
        isDark: false,
        background: '#fdf8e9',
        surface: '#fdf8e9',
        foreground: '#0e2e5d',
        muted: '#736658',
        border: '#eaddc6',
        accent: '#5d825b',
    },
    
    dark_notepad: {
        isDark: true,
        background: '#241f1c',
        surface: '#241f1c',
        foreground: '#e6dfd3',
        muted: '#8a7d71',
        border: '#3d342d',
        accent: '#d97757',
    }
};
