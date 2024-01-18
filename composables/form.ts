import { type FormState } from "~/utils/types";

export const useForm = () => useState<FormState>('form', () => {
    return {
        baseline: new Date('01/01/2023'),
        deadline: new Date('01/01/2026'),
        target: 1050,
        currentTarget: 63,
        unit: 'MNOK',
        showResults: false,
    }
})