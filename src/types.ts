export type SkillCategory =
  | "Tất cả"
  | "Tư vấn Khách hàng"
  | "Soạn thảo Hợp đồng"
  | "Tranh tụng & Tố tụng"
  | "Đàm phán & Thương lượng"
  | "Nghiên cứu Pháp lý"
  | "Quản lý Hồ sơ & Đạo đức";

export type ExperienceLevel =
  | "Tập sự & Luật sư trẻ"
  | "Kinh nghiệm trung cấp"
  | "Luật sư cao cấp / Trưởng nhóm";

export interface Comment {
  id: string;
  author: string;
  role: string;
  content: string;
  date: string;
  likes: number;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  category: SkillCategory;
  experienceLevel: ExperienceLevel;
  readTime: number; // in minutes
  author: {
    name: string;
    title: string;
    avatar: string;
    lawFirm?: string;
  };
  date: string;
  tags: string[];
  views: number;
  likes: number;
  summary: string;
  contentMarkdown: string;
  keyTakeaways: string[];
  downloadChecklistId?: string;
  isFeatured?: boolean;
}

export interface ChecklistItem {
  id: string;
  label: string;
  explanation: string;
  riskWarning?: string;
  categoryTag?: string;
}

export interface LegalChecklist {
  id: string;
  title: string;
  description: string;
  category: SkillCategory;
  targetDocument: string;
  items: ChecklistItem[];
  sampleClause?: string;
}

export interface ScenarioOption {
  id: string;
  choiceText: string;
  feedback: string;
  isRecommended: boolean;
  scoreExplanation: string;
}

export interface PracticalScenario {
  id: string;
  title: string;
  category: SkillCategory;
  difficulty: ExperienceLevel;
  context: string;
  clientGoal: string;
  legalConflict: string;
  options: ScenarioOption[];
  partnerAdvice: string;
}

export interface UserSavedState {
  bookmarks: string[]; // blog post ids
  likedPosts: string[]; // blog post ids
  completedChecklistItems: Record<string, string[]>; // checklistId -> itemIds
  scenarioProgress: Record<string, string>; // scenarioId -> selectedOptionId
  userNotes: Record<string, string>; // postId -> note
}
