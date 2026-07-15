REVOKE EXECUTE ON FUNCTION public.submit_partner_enquiry(text, text, text, text, text, text) FROM anon;
REVOKE EXECUTE ON FUNCTION public.submit_partner_enquiry(text, text, text, text, text, text) FROM authenticated;
GRANT EXECUTE ON FUNCTION public.submit_partner_enquiry(text, text, text, text, text, text) TO service_role;