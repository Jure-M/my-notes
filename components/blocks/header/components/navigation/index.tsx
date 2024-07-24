import { getTranslation } from '@/app/i18n';

type NavigationProps = {
  lang: string;
};

export const Navigation = async ({ lang }: NavigationProps) => {
  const { t } = await getTranslation('translation', lang);
  return (
    <ul className="flex gap-3">
      <li>{t('nav.about')}</li>
      <li>{t('nav.music')}</li>
      <li>{t('nav.contact')}</li>
    </ul>
  );
};
