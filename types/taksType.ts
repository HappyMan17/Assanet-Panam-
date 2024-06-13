export interface Task {
  createdAt: string;
  done?:      boolean;
  name:      string;
  avatar:    string | null;
  id:        string;
};
