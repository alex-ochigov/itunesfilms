interface ITheme {
  fonts: {
    defaultFamily: string;
    defaultSize: number;
  };

  colors: {
    background: string;
    primary: string;
    grey: string;
    lighGrey: string;
    darkGrey: string;
    error: string;
    link: string;
  };

  decorations: {};
}

const common = {
  fonts: {
    defaultFamily: 'Lato-Regular',
    defaultSize: 14,
  },

  colors: {
    grey: '#ddd',
    lighGrey: '#eee',
    darkGrey: '#888',
    error: '#ef5350',
    link: '#2196f3',
  },

  decorations: {},
};

const light: ITheme = {
  ...common,

  colors: {
    ...common.colors,
    background: '#FFF',
    primary: '#212121',
  },
};

const dark: ITheme = {
  ...common,

  colors: {
    ...common.colors,
    background: '#212121',
    primary: '#FFF',
  },
};

export {light, dark};
export type {ITheme};
