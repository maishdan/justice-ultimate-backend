// Admin User
export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'admin';
  created_at: string;
  last_login: string;
}

// Admin Note
export interface AdminNote {
  id: string;
  title: string;
  content: string;
  category: 'personal' | 'work' | 'ideas' | 'todo';
  tags: string[];
  is_encrypted: boolean;
  created_at: string;
  updated_at: string;
}

// Admin Password
export interface AdminPassword {
  id: string;
  title: string;
  username: string;
  encrypted_password: string;
  url?: string;
  notes?: string;
  category: 'social' | 'work' | 'finance' | 'personal' | 'other';
  strength: 'weak' | 'medium' | 'strong' | 'very_strong';
  created_at: string;
  updated_at: string;
}

// Admin Project
export interface AdminProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image_url?: string;
  live_url?: string;
  github_url?: string;
  featured: boolean;
  order_index: number;
  created_at: string;
  updated_at: string;
}

// Portfolio Analytics
export interface PortfolioAnalytics {
  id: string;
  page: string;
  ip_address: string;
  user_agent: string;
  device_type: 'desktop' | 'mobile' | 'tablet';
  browser: string;
  country?: string;
  city?: string;
  created_at: string;
}

// Admin Chat Message
export interface AdminChatMessage {
  id: string;
  contact_message_id: string;
  sender: 'admin' | 'client';
  message: string;
  file_url?: string;
  file_name?: string;
  file_size?: number;
  created_at: string;
}

// Admin Settings
export interface AdminSetting {
  id: string;
  key: string;
  value: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

// Encryption Key
export interface EncryptionKey {
  id: string;
  key_name: string;
  encrypted_key: string;
  algorithm: 'AES-256' | 'RSA-4096' | 'ECC' | 'PBKDF2' | 'Argon2';
  salt?: string;
  iterations?: number;
  created_at: string;
}

// Contact Message with Chat
export interface ContactMessageWithChat {
  // ContactMessage properties
  id: string;
  full_name: string;
  email: string;
  phone_number?: string;
  project_details: string;
  created_at: string;
  updated_at: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  ip_address?: string;
  user_agent?: string;
  
  // Chat messages
  chat_messages: AdminChatMessage[];
}

// Dashboard Statistics
export interface DashboardStats {
  total_views: number;
  total_messages: number;
  unread_messages: number;
  total_notes: number;
  total_passwords: number;
  total_projects: number;
  recent_messages: ContactMessageWithChat[];
  views_by_page: { page: string; views: number }[];
  views_by_date: { date: string; views: number }[];
}

// Login Credentials
export interface LoginCredentials {
  email: string;
  password: string;
}

// Auth Response
export interface AuthResponse {
  success: boolean;
  user?: AdminUser;
  error?: string;
} 