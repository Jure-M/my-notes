export const fallbackLng = 'hr';
export const languages = [fallbackLng, 'en'] as const;
export const cookieName = 'x-my-notes-locale';

export type SupportedLanguages = (typeof languages)[number];
