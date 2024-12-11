export type ServerResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
};

export type Link = {
  textToShow: string;
  link: string;
}

export type Usuario = {
  id: string;
  username: string;
  password?: string;
  email: string;
  urlAvatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
  projects: string[];
  posts: PostAtUser[];
  stats: object;
  title?: string;
  description?: string;
  technologies: string[];
  links: Link[];
}

export type Proyecto = {
  name:string;
}