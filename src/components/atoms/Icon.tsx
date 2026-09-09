interface IconProps {
  name: string;
  className?: string;
}

/** Thin wrapper around a Font Awesome 5 icon class, e.g. name="fab fa-whatsapp" */
export function Icon({ name, className = '' }: IconProps) {
  return <i className={`${name} ${className}`} aria-hidden="true" />;
}
