export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      faq: {
        Row: {
          answer: string | null
          dislike: number | null
          id: number
          like: number | null
          popularity_percentage: number | null
          title: string | null
        }
        Insert: {
          answer?: string | null
          dislike?: number | null
          id?: number
          like?: number | null
          popularity_percentage?: number | null
          title?: string | null
        }
        Update: {
          answer?: string | null
          dislike?: number | null
          id?: number
          like?: number | null
          popularity_percentage?: number | null
          title?: string | null
        }
      }
      forum: {
        Row: {
          answer: string | null
          dislike: number | null
          id: number
          like: number | null
          popularity_percentage: number | null
          title: string | null
        }
        Insert: {
          answer?: string | null
          dislike?: number | null
          id?: number
          like?: number | null
          popularity_percentage?: number | null
          title?: string | null
        }
        Update: {
          answer?: string | null
          dislike?: number | null
          id?: number
          like?: number | null
          popularity_percentage?: number | null
          title?: string | null
        }
      }
      votes: {
        Row: {
          created_at: string | null
          id: number
          question_id: number | null
          user_id: string | null
          vote: boolean | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          question_id?: number | null
          user_id?: string | null
          vote?: boolean | null
        }
        Update: {
          created_at?: string | null
          id?: number
          question_id?: number | null
          user_id?: string | null
          vote?: boolean | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      decrement_faq: {
        Args: {
          row_id: number
        }
        Returns: undefined
      }
      decrement_forum: {
        Args: {
          row_id: number
        }
        Returns: undefined
      }
      increment_faq: {
        Args: {
          row_id: number
        }
        Returns: undefined
      }
      increment_forum: {
        Args: {
          row_id: number
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
