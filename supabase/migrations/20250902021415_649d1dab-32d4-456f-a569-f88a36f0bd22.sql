-- Documents table: allow authenticated users to insert their own metadata
CREATE POLICY "Users can insert their own documents"
ON public.documents
FOR INSERT TO authenticated
WITH CHECK (uploaded_by = auth.uid());