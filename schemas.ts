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
          popularity_percentage: number | null
          title: string | null
          upvotes: number | null
        }
        Insert: {
          answer?: string | null
          dislike?: number | null
          id?: number
          popularity_percentage?: number | null
          title?: string | null
          upvotes?: number | null
        }
        Update: {
          answer?: string | null
          dislike?: number | null
          id?: number
          popularity_percentage?: number | null
          title?: string | null
          upvotes?: number | null
        }
        Relationships: []
      }
      forum: {
        Row: {
          answer: string | null
          dislike: number | null
          id: number
          like: number | null
          popularity_percentage: number | null
          test_trigger: boolean | null
          title: string | null
        }
        Insert: {
          answer?: string | null
          dislike?: number | null
          id?: number
          like?: number | null
          popularity_percentage?: number | null
          test_trigger?: boolean | null
          title?: string | null
        }
        Update: {
          answer?: string | null
          dislike?: number | null
          id?: number
          like?: number | null
          popularity_percentage?: number | null
          test_trigger?: boolean | null
          title?: string | null
        }
        Relationships: []
      }
      votes: {
        Row: {
          created_at: string
          generated_vote_id: string
          question_id: number
          user_id: string
          vote: boolean
        }
        Insert: {
          created_at?: string
          generated_vote_id?: string
          question_id: number
          user_id?: string
          vote: boolean
        }
        Update: {
          created_at?: string
          generated_vote_id?: string
          question_id?: number
          user_id?: string
          vote?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "votes_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "faq"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
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
