import {readable, writable} from "svelte/store"
import { lightTheme } from "../themes/light"
import { darkTheme } from "../themes/dark"
import { css } from "emotion"

export const themes = {
    light: 'LIGHT',
    dark: 'DARK',
};


export const theme = writable(loadTheme(themes.light));

export function setTheme(themeToApply) {
    const loadedTheme = loadTheme(themeToApply);
    theme.set(loadedTheme);
}

function loadTheme(theme) {
    switch (theme) {
        case themes.light:
            return toEmotion(lightTheme);
        case themes.dark:
            return toEmotion(darkTheme);
        default:
            throw 'No theme for ' + theme;
    }
}

function toEmotion(themeData) {
    return {
        footer: css`background:${themeData.footerBackground}`
    }
}

// Initialise
setTheme(themes.light);
