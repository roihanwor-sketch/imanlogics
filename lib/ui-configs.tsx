import { Zap, ShieldCheck, Book, Beaker, FileText, Video, Globe, BrainCircuit } from 'lucide-react';

export function BadgeConfig({ status }: { status: string }) {
  const BADGES: Record<string, string> = {
    concept: 'badge-concept',
    research: 'badge-research',
    prototype: 'badge-prototype',
    inprogress: 'badge-inprogress',
    available: 'badge-available',
    live: 'badge-live'
  };

  const LABELS: Record<string, string> = {
    concept: 'Concept',
    research: 'Research',
    prototype: 'Prototype',
    inprogress: 'In Progress',
    available: 'Available',
    live: 'Live'
  };

  const badgeClass = BADGES[status.toLowerCase()] || BADGES.concept;
  const label = LABELS[status.toLowerCase()] || status;

  return (
    <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${badgeClass}`}>
      {label}
    </span>
  );
}

export function IconConfig({ name, className }: { name: string, className?: string }) {
  const SVGS: Record<string, React.ElementType> = {
    lightning: Zap,
    shield: ShieldCheck,
    book: Book,
    beaker: Beaker,
    document: FileText,
    video: Video,
    globe: Globe,
    brain: BrainCircuit
  };

  const Icon = SVGS[name.toLowerCase()] || Zap;
  return <Icon className={className} />;
}
