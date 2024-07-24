import { Section } from '@/components/layout/section';
import { Navigation } from './components/navigation';
import { LanguageSwitcher } from './components/language-switcher';
import { ThemeSwitcher } from './components/theme-switcher';
import { SupportedLanguages } from '@/app/i18n/settings';

type NavigationProps = {
  lang: SupportedLanguages;
};

export const Header = ({ lang }: NavigationProps) => {
  return (
    <div className="bg-header-bg">
      <Section variant="container">
        <div className="py-6 grid gap-4 grid-cols-[1fr_min-content_min-content]">
          <Navigation lang={lang} />
          <LanguageSwitcher lang={lang} />
          <ThemeSwitcher />
        </div>
      </Section>
    </div>
  );
};
