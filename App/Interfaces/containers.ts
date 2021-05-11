export interface ILandingProps {}
export interface IAuthLoadingProps {
  navigation: {
    navigate: (routeName: string) => void;
  };
}

export interface ILoginProps {
  navigation: {
    navigate: (routeName: string) => void;
    goBack: () => void;
  };
}

export interface ISignUpProps {
  navigation: {
    navigate: (routeName: string) => void;
    goBack: () => void;
  };
}

export interface IDashboardProps {
  navigation: {
    navigate: (routeName: string) => void;
    goBack: () => void;
  };
}
