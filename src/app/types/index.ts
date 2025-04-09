export interface Blog {
    id: number;
    title: string;
    image: string;
    description: string;
    date: string;
    slug: string;
    content: {
      introduction: string;
      mainContent: { question: string; answer: string }[];
      conclusion: string;
    };
  }
  