import { SocialIconRow } from '../molecules/SocialIconRow';

export function TopBar() {
  return (
    <div className="hidden bg-black px-5 lg:block">
      <div className="mx-auto flex h-[45px] max-w-[1320px] items-center px-4">
        <SocialIconRow
          variant="outline"
          platforms={['twitter', 'telegram', 'instagram', 'whatsapp', 'snapchat', 'tiktok', 'youtube', 'paypal']}
        />
      </div>
    </div>
  );
}
