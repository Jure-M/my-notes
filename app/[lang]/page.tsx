import { Header } from '@/components/blocks/header';
import { SupportedLanguages } from '../i18n/settings';

type HomeProps = {
  params: {
    lang: SupportedLanguages;
  };
};

export default function Home({ params }: HomeProps) {
  const { lang } = params;

  return (
    <main>
      <Header lang={lang} />
    </main>
  );
}
