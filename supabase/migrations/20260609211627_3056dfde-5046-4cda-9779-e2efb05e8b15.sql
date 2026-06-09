
CREATE TABLE public.ebook_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  source TEXT DEFAULT 'ebook_download',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.ebook_leads TO anon, authenticated;
GRANT ALL ON public.ebook_leads TO service_role;

ALTER TABLE public.ebook_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
ON public.ebook_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
