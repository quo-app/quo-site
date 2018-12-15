const colors = {
    primary: '#0853fe',
    bg: '#1a1a1a',
    fg: '#f8f8f8',
};

const fonts = {
    family: 'Rajdhani, sans-serif',
    weight: {
        regular: 500,
        semibold: 600,
        bold: 700
    }
};

const button = {
    colors: {
        bg_on_fg: '#e4e5e5',
        bg_on_fg_hover: '#b1b1b1',
        bg_on_bg: '#434343',
        bg_on_bg_hover: '#686868',
        bg_primary: colors.primary
    }
};

const text = {
    weight: {
        h1: fonts.weight.bold,
        h2:  fonts.weight.bold,
        h3:  fonts.weight.semibold,
        h4:  fonts.weight.bold,
        h5:  fonts.weight.semibold,
        p:  fonts.weight.regular,
        p_bold:  fonts.weight.semibold,
    },
    size: {
        h1: '6rem',
        h2: '4rem',
        h3: '2.5rem',
        h4: '2rem',
        h5: '1.5rem',
        p: '.9rem',
    },
    colors: {
        on_fg: '#111111',
        on_fg_inactive: '#b1b1b1',
        on_fg_hover: '#909090',
        on_bg: '#ffffff',
        on_bg_inactive: '#b1b1b1',
        on_bg_hover: '#686868',
        primary: colors.primary,
    },
    margins: {
        h1: '.2em 0em',
        h2: '.2em 0em',
        h3: '.2em 0em',
        h4: '.2em 0em',
        h5: '.2em 0em',
        p: '.25em 0em',
    }
};

const logo = {
    colors: {
        primary: colors.primary,
        on_fg: colors.bg,
        on_fg_hover: '#565656',
        on_bg: colors.fg,
        on_bg_hover: '#b1b1b1',
    }
};

const theme = {
    button,
    text,
    colors,
    fonts,
    logo,
    sizes: {
        unit: 'px',
        radius: 4,
        w: {
            page: 1100,
            dropdown: 150,
        },
        h: {
            header: 60
        }
    }
};

export default theme;