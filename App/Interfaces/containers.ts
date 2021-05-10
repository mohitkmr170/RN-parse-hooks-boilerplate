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
