import { StatusPageSection } from '../components/organisms/StatusPageSection';

export function ComingSoonPage() {
  return (
    <StatusPageSection
      icon="fas fa-tools"
      iconColorClass="text-brand"
      titleKey="construction:title"
      messageKey="construction:message"
      homeKey="construction:home"
      contactKey="construction:contact"
    />
  );
}
