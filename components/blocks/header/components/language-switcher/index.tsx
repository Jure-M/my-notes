import { getTranslation } from '@/app/i18n';
import { languages, SupportedLanguages } from '@/app/i18n/settings';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { CiGlobe } from 'react-icons/ci';

type NavigationProps = {
  lang: SupportedLanguages;
};

export const LanguageSwitcher = async ({ lang }: NavigationProps) => {
  const { t } = await getTranslation('translation', lang);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-1">
          <CiGlobe color="orangered" />
          {t('languages.title')}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map(lang => (
          <DropdownMenuItem key={lang}>
            <Link href={`/${lang}`}>{t(`languages.${lang}`)}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
