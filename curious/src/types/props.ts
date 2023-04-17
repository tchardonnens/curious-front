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

export type Resources = {
  chatgpt: SubjectsList;
  content: YoutubeVideoSimple[];
}