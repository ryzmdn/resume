import React from 'react';

interface SectionProps {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
}

export function Section({ title, icon: Icon, children }: Readonly<SectionProps>) {
  return (
    <section className="w-full divide-y divide-gray-300">
      <div className="flex justify-between items-center py-2">
        <div>
          <h3 className="text-lg text-gray-900 font-semibold tracking-wide">{title}</h3>
        </div>
        <div className="shrink-0">
          <Icon aria-hidden={true} className="size-4 text-gray-900" />
        </div>
      </div>
      <div className="space-y-3 py-5">{children}</div>
    </section>
  );
}
