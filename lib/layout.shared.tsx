import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="/logo/light.svg"
            alt="WhatsApp Use"
            width={143}
            height={24}
            className="dark:hidden"
          />
          <Image
            src="/logo/dark.svg"
            alt="WhatsApp Use"
            width={143}
            height={24}
            className="hidden dark:block"
          />
        </>
      ),
    },
    githubUrl: 'https://github.com/pally-ai',
    links: [
      {
        text: 'Platform',
        url: 'https://platform.whatsapp-use.com',
        external: true,
      },
      {
        text: 'Get API key',
        url: 'https://platform.whatsapp-use.com/app/keys',
        external: true,
      },
    ],
  };
}
