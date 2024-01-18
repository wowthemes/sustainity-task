export interface FormState {
  baseline: Date;
  deadline: Date;
  target: number;
  currentTarget: number;
  unit: string;
  showResults: boolean;
}

export interface Strings {
  base: string;
  track: string;
  other: string;
}

export interface ProgressState {
  showTooltipFlag: boolean;
  tooltipX: number;
  progressLine: string;
  progressText: string;
}

export interface ProgressValues {
  currentTarget: number;
  target: number;
  deadline: Date;
  baseline: Date;
  showResults: boolean;
  unit: string;
}

export interface ProgressForecast {
  percent: number;
  amount: number;
}
export type StringTypes = 'base' | 'track' | 'other';
export type ProgressTextKeys = Record<string, (key: StringTypes) => string>;

export interface ProgressHelpers {
  tooltipPosition: (event: MouseEvent) => void;
  getProgressText: (target: HTMLElement) => void;
  currentForecast: () => ProgressForecast;
  currencyFormat: (n: number) => string;
  numberFormat: (n: number) => string;
  percentageAchieved: Ref;
  showTooltipFlag: Ref;
  tooltipX: Ref;
  progressLine: Ref;
  progressText: Ref;
  currentPercent: Ref;
  targetAmountTillToday: Ref;
}



export interface ReplacePlaceholders {
  (percent: number, amount: number, date: Date, key: StringTypes): string;
}
