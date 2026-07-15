CREATE TABLE public.partner_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business_name text,
  website text,
  tier text NOT NULL,
  message text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.partner_enquiries TO anon;
GRANT INSERT ON public.partner_enquiries TO authenticated;
GRANT ALL ON public.partner_enquiries TO service_role;

ALTER TABLE public.partner_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public submissions" ON public.partner_enquiries FOR INSERT TO anon, authenticated WITH CHECK (true);