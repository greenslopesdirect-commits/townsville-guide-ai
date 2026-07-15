CREATE OR REPLACE FUNCTION public.submit_partner_enquiry(
  _name text,
  _email text,
  _business_name text,
  _website text,
  _tier text,
  _message text
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF _name IS NULL OR length(trim(_name)) < 2 OR length(trim(_name)) > 100 THEN
    RAISE EXCEPTION 'Name is required and must be between 2 and 100 characters.';
  END IF;

  IF _email IS NULL OR _email !~ '^[^\s@]+@[^\s@]+\.[^\s@]+$' OR length(_email) > 255 THEN
    RAISE EXCEPTION 'A valid email address is required.';
  END IF;

  IF _tier IS NULL OR _tier NOT IN ('community', 'founding', 'gameday', 'other') THEN
    RAISE EXCEPTION 'Please select a valid tier.';
  END IF;

  INSERT INTO public.partner_enquiries (name, email, business_name, website, tier, message)
  VALUES (trim(_name), lower(trim(_email)), nullif(trim(_business_name), ''), nullif(trim(_website), ''), _tier, nullif(trim(_message), ''));
END;
$$;

REVOKE INSERT ON public.partner_enquiries FROM anon;
REVOKE INSERT ON public.partner_enquiries FROM authenticated;

DROP POLICY IF EXISTS "Allow public submissions" ON public.partner_enquiries;