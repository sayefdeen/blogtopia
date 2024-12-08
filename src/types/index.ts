export interface User {
  name: string;
  id: string;
}

export interface PostCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  user: User | null;
  button: {
    text: string;
    link: string;
  };
  showReadMore?: boolean;
}
