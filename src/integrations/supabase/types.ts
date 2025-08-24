export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      fund_allocation: {
        Row: {
          asset_class: Database["public"]["Enums"]["asset_class"]
          created_at: string
          date: string
          id: string
          updated_at: string
          value: number
        }
        Insert: {
          asset_class: Database["public"]["Enums"]["asset_class"]
          created_at?: string
          date: string
          id?: string
          updated_at?: string
          value: number
        }
        Update: {
          asset_class?: Database["public"]["Enums"]["asset_class"]
          created_at?: string
          date?: string
          id?: string
          updated_at?: string
          value?: number
        }
        Relationships: []
      }
      fund_performance: {
        Row: {
          created_at: string
          date: string
          fund_nav: number
          id: string
          realized_gain_loss: number
          total_contributions: number
          total_distributions: number
          unrealized_gain_loss: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          date: string
          fund_nav: number
          id?: string
          realized_gain_loss?: number
          total_contributions?: number
          total_distributions?: number
          unrealized_gain_loss?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          date?: string
          fund_nav?: number
          id?: string
          realized_gain_loss?: number
          total_contributions?: number
          total_distributions?: number
          unrealized_gain_loss?: number
          updated_at?: string
        }
        Relationships: []
      }
      fund_transactions: {
        Row: {
          amount: number
          asset: string
          created_at: string
          date: string
          id: string
          lp_id: string | null
          notes: string | null
          txn_id: string
          type: Database["public"]["Enums"]["transaction_type"]
          updated_at: string
        }
        Insert: {
          amount: number
          asset: string
          created_at?: string
          date: string
          id?: string
          lp_id?: string | null
          notes?: string | null
          txn_id: string
          type: Database["public"]["Enums"]["transaction_type"]
          updated_at?: string
        }
        Update: {
          amount?: number
          asset?: string
          created_at?: string
          date?: string
          id?: string
          lp_id?: string | null
          notes?: string | null
          txn_id?: string
          type?: Database["public"]["Enums"]["transaction_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fund_transactions_lp_id_fkey"
            columns: ["lp_id"]
            isOneToOne: false
            referencedRelation: "lp_accounts"
            referencedColumns: ["lp_id"]
          },
        ]
      }
      lp_accounts: {
        Row: {
          commitment_amount: number
          contributed: number
          created_at: string
          id: string
          lp_id: string
          name: string
          net_position: number
          returned: number
          unrealized_value: number
          updated_at: string
        }
        Insert: {
          commitment_amount: number
          contributed?: number
          created_at?: string
          id?: string
          lp_id: string
          name: string
          net_position?: number
          returned?: number
          unrealized_value?: number
          updated_at?: string
        }
        Update: {
          commitment_amount?: number
          contributed?: number
          created_at?: string
          id?: string
          lp_id?: string
          name?: string
          net_position?: number
          returned?: number
          unrealized_value?: number
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string
          full_name: string | null
          id: string
          lp_id: string | null
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string
          verification_approved_at: string | null
          verification_document_url: string | null
          verification_notes: string | null
          verification_status: string | null
          verification_submitted_at: string | null
        }
        Insert: {
          created_at?: string
          email: string
          full_name?: string | null
          id: string
          lp_id?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
          verification_approved_at?: string | null
          verification_document_url?: string | null
          verification_notes?: string | null
          verification_status?: string | null
          verification_submitted_at?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          lp_id?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
          verification_approved_at?: string | null
          verification_document_url?: string | null
          verification_notes?: string | null
          verification_status?: string | null
          verification_submitted_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_role: {
        Args: { user_id: string }
        Returns: Database["public"]["Enums"]["app_role"]
      }
      has_role: {
        Args: {
          required_role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "lp" | "user"
      asset_class:
        | "Equity"
        | "Bonds"
        | "Crypto"
        | "Cash"
        | "Real Estate"
        | "Alternatives"
      transaction_type:
        | "Contribution"
        | "Distribution"
        | "Management Fee"
        | "Performance Fee"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "lp", "user"],
      asset_class: [
        "Equity",
        "Bonds",
        "Crypto",
        "Cash",
        "Real Estate",
        "Alternatives",
      ],
      transaction_type: [
        "Contribution",
        "Distribution",
        "Management Fee",
        "Performance Fee",
      ],
    },
  },
} as const
