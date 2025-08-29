-- Storage policies for private buckets to allow users to manage files in their own folder and admins full access
-- IMPORTANT: We scope policies per-bucket and use the first folder as the user id

-- Client Documents bucket policies
CREATE POLICY "client-docs: users insert own"
ON storage.objects
FOR INSERT TO authenticated
WITH CHECK (
  bucket_id = 'client-documents'
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "client-docs: users read own"
ON storage.objects
FOR SELECT TO authenticated
USING (
  bucket_id = 'client-documents'
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "client-docs: users update own"
ON storage.objects
FOR UPDATE TO authenticated
USING (
  bucket_id = 'client-documents'
  AND auth.uid()::text = (storage.foldername(name))[1]
)
WITH CHECK (
  bucket_id = 'client-documents'
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "client-docs: users delete own"
ON storage.objects
FOR DELETE TO authenticated
USING (
  bucket_id = 'client-documents'
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "client-docs: admins manage all"
ON storage.objects
FOR ALL TO authenticated
USING (bucket_id = 'client-documents' AND has_role(auth.uid(),'admin'))
WITH CHECK (bucket_id = 'client-documents' AND has_role(auth.uid(),'admin'));

-- Verification Documents bucket policies
CREATE POLICY "verif-docs: users insert own"
ON storage.objects
FOR INSERT TO authenticated
WITH CHECK (
  bucket_id = 'verification-docs'
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "verif-docs: users read own"
ON storage.objects
FOR SELECT TO authenticated
USING (
  bucket_id = 'verification-docs'
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "verif-docs: users update own"
ON storage.objects
FOR UPDATE TO authenticated
USING (
  bucket_id = 'verification-docs'
  AND auth.uid()::text = (storage.foldername(name))[1]
)
WITH CHECK (
  bucket_id = 'verification-docs'
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "verif-docs: users delete own"
ON storage.objects
FOR DELETE TO authenticated
USING (
  bucket_id = 'verification-docs'
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "verif-docs: admins manage all"
ON storage.objects
FOR ALL TO authenticated
USING (bucket_id = 'verification-docs' AND has_role(auth.uid(),'admin'))
WITH CHECK (bucket_id = 'verification-docs' AND has_role(auth.uid(),'admin'));

-- Documents table: allow authenticated users to insert their own metadata
CREATE POLICY "Users can insert their own documents"
ON public.documents
FOR INSERT TO authenticated
WITH CHECK (uploaded_by = auth.uid());