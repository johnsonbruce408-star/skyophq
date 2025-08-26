-- Fix security vulnerabilities by adding explicit policies to deny anonymous access
-- and strengthen RLS protection for sensitive data

-- 1. Add explicit policy to deny anonymous access to profiles table
CREATE POLICY "Deny anonymous access to profiles" 
ON public.profiles 
FOR ALL 
TO anon 
USING (false);

-- 2. Add explicit policy to deny anonymous access to lp_accounts table  
CREATE POLICY "Deny anonymous access to LP accounts"
ON public.lp_accounts
FOR ALL
TO anon
USING (false);

-- 3. Add explicit policy to deny anonymous access to fund_transactions table
CREATE POLICY "Deny anonymous access to fund transactions"
ON public.fund_transactions  
FOR ALL
TO anon
USING (false);

-- 4. Add explicit policy to deny anonymous access to fund_performance table
CREATE POLICY "Deny anonymous access to fund performance"
ON public.fund_performance
FOR ALL
TO anon
USING (false);

-- 5. Add explicit policy to deny anonymous access to fund_allocation table
CREATE POLICY "Deny anonymous access to fund allocation"
ON public.fund_allocation
FOR ALL
TO anon
USING (false);

-- 6. Strengthen profiles table security by ensuring only authenticated users can access
-- Add a more restrictive policy for authenticated users who aren't admin or the profile owner
CREATE POLICY "Restrict profile access to authorized users only"
ON public.profiles
FOR SELECT
TO authenticated
USING (
  auth.uid() = id OR 
  has_role(auth.uid(), 'admin'::app_role)
);

-- 7. Ensure profiles can only be created through the trigger system (by Supabase Auth)
-- Add INSERT policy that only allows the auth system to create profiles
CREATE POLICY "Allow profile creation only through auth trigger"
ON public.profiles
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = id);

-- 8. Add explicit DELETE policy to prevent profile deletion except by admins
CREATE POLICY "Only admins can delete profiles"
ON public.profiles
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));