export interface LayoutProps {
  children: React.ReactNode;
  params: object;
}

export interface PageProps {
  params: {
    slug: string[];
  };
}
