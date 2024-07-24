import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type SectionProps = {
  variant?: 'full' | 'container';
};

export const Section = ({ variant = 'full', children }: PropsWithChildren<SectionProps>) => {
  const isFullWidth = variant == 'full';

  return (
    <div className="grid grid-cols-[minmax(16px,_1fr)_minmax(1260px,_1fr)_minmax(16px,_1fr)]">
      <div className={cn(isFullWidth ? 'col-start-1 col-end-4' : 'col-start-2 col-end-2')}>
        {children}
      </div>
    </div>
  );
};
