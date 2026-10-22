export interface CaseStudy {
  id: string;
  title: string;
  category: 'preservation' | 'functional' | 'revision';
  categoryLabel: string;
  patientAge: string;
  timeframe: string;
  beforeImage: string;
  afterImage: string;
  technique: string;
  quote: string;
  breathingScore: string;
  recoveryDays: string;
  details: string[];
}

export interface AssessmentStep {
  id: number;
  question: string;
  options: {
    label: string;
    sublabel?: string;
    points: number;
    tag: string;
  }[];
}

export interface AuditRecommendation {
  category: 'seo' | 'performance' | 'ux' | 'architecture';
  title: string;
  status: 'critical' | 'implemented' | 'recommended';
  description: string;
  impact: string;
  actionTaken: string;
}
