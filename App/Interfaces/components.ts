export interface IButtonProps {
  onPress?: () => void;
  buttonStyle?: object;
  disabled?: boolean;
  internalStyle?: object;
  titleStyle?: object;
  title?: string;
  loading?: boolean;
}
