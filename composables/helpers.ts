import { type Strings, type StringTypes, type ProgressForecast, type ProgressTextKeys, type ProgressHelpers, type ReplacePlaceholders, type FormState } from '../utils/types';

const strings: Strings = {
  base: `{{value}} status on {{date}}`,
  track: `{{value}} to be on track {{date}}`,
  other: `Target is {{value}} by {{date}}`,
}
const form = useForm();

export const useHelpers = (): ProgressHelpers => {
  const today: Date = new Date();

  const showTooltipFlag = useState<boolean>('showTooltipFlag', () => false);
  const tooltipX = useState<number>('tooltipX', () => 0);
  const progressLine = useState<HTMLDivElement | null>('progressLine', () => null);
  const progressText = useState<string>('progressText', () => '');

  const currentPercent = computed(():number => parseFloat(((form.value.currentTarget / form.value.target) * 100).toFixed(0)));

  const formatDate = (date: Date): string => date.toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' });

  const numberFormat = (number: number): string => number.toFixed(0);

  const currencyFormat = (n: number): string => `${numberFormat(n)} ${form.value.unit}`;

  const tooltipPosition = (event: MouseEvent): void => {
    const svgRect = progressLine.value?.getBoundingClientRect();
    const mouseX = event.clientX - (svgRect?.left || 0);
    tooltipX.value = Math.max(0, Math.min((svgRect?.width || 0) - 60, mouseX - 30));
    getProgressText(event.target as HTMLElement);
  };

  const currentForecast = (): ProgressForecast => {
    const totalDuration = form.value.deadline.getTime() - form.value.baseline.getTime();
    const durationTillToday = today.getTime() - form.value.baseline.getTime();
    const amount = (durationTillToday / totalDuration) * form.value.target;
    const percent = (amount / form.value.target) * 100;

    return { percent, amount };
  };

  const percentageAchieved = computed(() => currentForecast().percent);
  const targetAmountTillToday = computed(() => currentForecast().amount);

  const progressTextKeys: ProgressTextKeys = {
    track: (key) => replacePlaceholders(percentageAchieved.value, targetAmountTillToday.value, today, key),
    other: (key) => replacePlaceholders(100, form.value.target, form.value.deadline, key),
    base: (key) => replacePlaceholders(currentPercent.value, form.value.currentTarget, today, key),
  };

  const getProgressText = (target: HTMLElement): void => {
    const key = target.getAttribute('data-key') || 'base';
    const foundKey = progressTextKeys[key];

    if (foundKey) {
      progressText.value = foundKey(key as StringTypes);
    }
  };

  const replacePlaceholders: ReplacePlaceholders = (percent, amount, date, key) =>
    strings[key].replace(/{{(.*?)}}/g, (match: string, p: string) =>
      p === 'value' ? (form.value.showResults ? currencyFormat(amount) : `${numberFormat(percent)}%`) : p === 'date' ? formatDate(date) : match
    );

  return {
    tooltipPosition,
    getProgressText,
    currentForecast,
    currencyFormat,
    numberFormat,
    percentageAchieved,
    showTooltipFlag,
    tooltipX,
    progressLine,
    progressText,
    currentPercent,
    targetAmountTillToday,
  };
};
