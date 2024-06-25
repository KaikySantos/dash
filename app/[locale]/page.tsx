import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return (
    <div className="p-4">
      <p>Hello World!</p>
    </div>
  );
}
