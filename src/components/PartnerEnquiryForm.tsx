import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Send, CheckCircle, Copy, Check } from "lucide-react";
import { toast } from "sonner";

const FALLBACK_EMAIL = "hello@myaussieguide.com.au";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email")
    .max(255, "Email must be less than 255 characters"),
  businessName: z
    .string()
    .max(100, "Business name must be less than 100 characters")
    .optional(),
  website: z
    .string()
    .max(255, "Website/social link must be less than 255 characters")
    .optional(),
  tier: z.enum(["community", "founding", "gameday", "other"], {
    required_error: "Please select a tier",
  }),
  message: z
    .string()
    .max(2000, "Message must be less than 2000 characters")
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

const tierOptions = [
  { value: "community", label: "Community Listing (free)" },
  { value: "founding", label: "Founding Partner ($49/mo)" },
  { value: "gameday", label: "Game Day / Peak Placement ($99/mo)" },
  { value: "other", label: "Not sure / Something else" },
];

const PartnerEnquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      businessName: "",
      website: "",
      tier: undefined,
      message: "",
    },
  });

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as FormValues["tier"];
      if (detail) form.setValue("tier", detail, { shouldValidate: true });
    };
    window.addEventListener("preselect-partner-tier", handler);
    return () => window.removeEventListener("preselect-partner-tier", handler);
  }, [form]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(FALLBACK_EMAIL);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy. Please copy manually.");
    }
  };


  const onSubmit = async (values: FormValues) => {
    try {
      const { data, error } = await supabase.functions.invoke("submit-partner-enquiry", {
        body: {
          name: values.name,
          email: values.email,
          business_name: values.businessName,
          website: values.website,
          tier: values.tier,
          message: values.message,
        },
      });

      if (error) throw error;
      if ((data as any)?.error) throw new Error((data as any).error);

      setSubmitted(true);
      toast.success("Enquiry submitted successfully");
    } catch (err: any) {
      const msg = err?.message ?? "Something went wrong. Please try again.";
      toast.error(msg);
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-8 bg-primary/5 border border-primary/20 rounded-xl">
        <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">Thanks for your enquiry</h3>
        <p className="text-muted-foreground">
          Duncan will review your details and be in touch within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Smith" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="jane@business.com.au" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Business Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website / Instagram (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="https://instagram.com/yourbusiness" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="tier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Which tier are you interested in?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a tier" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {tierOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tell us a little about what you run (optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What you do, which pages you'd like to appear on, any questions..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <Button
            type="submit"
            size="lg"
            className="w-full md:w-auto"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Submit enquiry
              </>
            )}
          </Button>
          <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
            <span>Prefer email instead?</span>
            <a
              href={`mailto:${FALLBACK_EMAIL}`}
              className="text-primary hover:underline underline-offset-2 break-all"
            >
              {FALLBACK_EMAIL}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-1 rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors px-2 py-1 text-xs font-medium"
              aria-label={copied ? "Email copied" : "Copy email address"}
            >
              {copied ? <Check className="w-3 h-3 text-primary" /> : <Copy className="w-3 h-3" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default PartnerEnquiryForm;
