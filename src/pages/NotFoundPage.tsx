import { StatusPageSection } from '../components/organisms/StatusPageSection';

export function NotFoundPage() {
  return (
    <StatusPageSection
      icon="fas fa-exclamation-triangle"
      iconColorClass="text-yellow-500"
      eyebrow="404"
      titleKey="notFound:title"
      messageKey="notFound:message"
      homeKey="notFound:home"
      contactKey="notFound:contact"
    />
  );
}
