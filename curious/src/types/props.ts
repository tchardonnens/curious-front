export type SidebarProps = {
  header: string;
  description: string;
}

export type SidebarPropsList = {
  history: SidebarProps[];
}

export type Subject = {
  name: string;
  description: string;
}

export type SubjectsList = {
  basic_subjects: Subject[];
  deeper_subjects: Subject[];
}

export type YoutubeVideoSimple = {
  title: string;
  description: string;
  url: string;
  image: string;
}

export type CleanGoogleResults = {
  title: string;
  snippet: string;
  link: string;
  long_description: string;
  image: string;
}

export type AllSourcesCleanGoogleResult = {
  youtube: CleanGoogleResults[];
  reddit: CleanGoogleResults[];
  twitter: CleanGoogleResults[];
}

export type Prompt = {
  id: number;
  title: string;
  user_id: number;
  created_at: string;
}

export type Resources = {
  subject: Prompt;
  content: AllSourcesCleanGoogleResult;
}

export type User = {
  id: number;
  username: string;
  email: string;
  full_name: string;
  bio: string;
  followings: number[];
  followers: number[];
}