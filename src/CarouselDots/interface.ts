export interface DotConfig {
  size: number;
  opacity: number;
  color: string;
  margin: number;
  borderWidth?: number;
  borderColor?: string;
  marginVertical?: number;
}
export interface DecreasingDot {
  quantity: number;
  config: DotConfig;
}

export interface CarouselState {
  currentIndex: number;
  state: number;
}
