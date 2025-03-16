export interface Artist {
  name: string;
  role: string;
  stage: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
  category?: string;
}
