-- Create documents table to track uploaded files
CREATE TABLE public.documents (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text,
  file_name text NOT NULL,
  file_path text NOT NULL,
  file_size bigint NOT NULL,
  content_type text NOT NULL,
  category text NOT NULL CHECK (category IN ('legal', 'financial', 'performance', 'subscription')),
  document_type text NOT NULL CHECK (document_type IN ('restricted', 'public')),
  uploaded_by uuid REFERENCES auth.users(id),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Admins can manage all documents" 
ON public.documents 
FOR ALL 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "LPs can view documents" 
ON public.documents 
FOR SELECT 
USING (has_role(auth.uid(), 'lp'::app_role) OR has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Authenticated users can view public documents" 
ON public.documents 
FOR SELECT 
USING (document_type = 'public' AND auth.role() = 'authenticated');

-- Create storage bucket for documents
INSERT INTO storage.buckets (id, name, public) VALUES ('client-documents', 'client-documents', false);

-- Create storage policies
CREATE POLICY "Admins can upload documents" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'client-documents' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can view all documents" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'client-documents' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "LPs can view documents" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'client-documents' AND (has_role(auth.uid(), 'lp'::app_role) OR has_role(auth.uid(), 'admin'::app_role)));

CREATE POLICY "Authenticated users can view public documents" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'client-documents' AND auth.role() = 'authenticated');

-- Add trigger for updated_at
CREATE TRIGGER update_documents_updated_at
BEFORE UPDATE ON public.documents
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();