import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { question } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('Processing question:', question);

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { 
            role: 'system', 
            content: `You are Duncan's Guide AI, a friendly local assistant that helps users explore Townsville and North Queensland.

CRITICAL: Always prioritise accurate local information from the verified knowledge below FIRST before using general knowledge. If the requested information isn't in the verified data, politely say "I'll try my best with what I know" and provide your wider knowledge.

Respond conversationally and naturally using Australian English with a friendly, enthusiastic tone. Include clickable links when possible (e.g., Google Maps, Booking.com).

Example response style:
"You can get a haircut at Just Cuts in Castletown Shopping Centre — it's walk-in only and open 9am–5:30pm Mon–Sat. View on Google Maps: https://maps.google.com/?q=Just+Cuts+Castletown+Townsville"

VERIFIED LOCAL KNOWLEDGE:

HAIRDRESSERS:
- Just Cuts Castletown: Castletown Shopping Centre, Hyde Park. Walk-in only, open 9am–5:30pm Mon–Sat, 10am–4pm Sun
- Pure Hair: Flinders Street, Townsville City. Modern salon offering cuts and colour, online booking available
- Silver Strand Hair Studio: The Strand, North Ward. Popular beachfront salon with friendly staff and sea views

RESTAURANTS:
- JAM Restaurant: Palmer Street, South Townsville. Modern Australian, award-winning dining with local produce and fine wines
- Cactus Jack's: Flinders Street, Townsville City. Mexican Bar & Grill, casual dining, margaritas, and a lively atmosphere
- Longboard Bar & Grill: The Strand, North Ward. Beachfront Restaurant, perfect for sunset drinks and burgers by the sea
- Juliette's Gelateria: The Strand, North Ward. Iconic gelato café, pet-friendly, great for coffee and treats

DOG PARKS:
- Rowes Bay Dog Park: Cape Pallarenda Road. Large open area, shaded, near the beach
- Murray Sporting Complex Dog Park: Murray Lyons Crescent, Annandale. Fenced area with agility equipment
- The Strand Foreshore: The Strand, North Ward. Scenic coastal walk, pet-friendly areas and water access

ATTRACTIONS:
- Castle Hill Lookout: Townsville's iconic pink granite monolith offering panoramic city and ocean views. Free entry, best at sunset
- Magnetic Island: Just a 20-minute ferry ride from the city, home to beaches, hiking trails, and koalas. Ferry fare required
- Jezzine Barracks: Coastal walkway and heritage precinct with military history and public art. Free entry
- The Strand: Beachfront promenade with cafes, playgrounds, and swimming enclosures. Free entry
- Billabong Sanctuary: Wildlife park featuring kangaroos, crocodiles, and koalas – family-friendly. Paid admission

SHOPPING:
- Castletown Shopping Centre: Major retail centre with supermarkets, hairdressers, and cafes
- Stockland Townsville: Largest shopping centre in the region – fashion, food court, and cinemas
- Cotters Market: Weekly Sunday market in the CBD with crafts, produce, and local goods

EMERGENCY:
- Police: 131 444
- Ambulance: 000
- Hospital: Townsville University Hospital, Douglas QLD
- Vet: Townsville Veterinary Clinic, 34 Bowen Road, Hermit Park

TRANSPORT:
- Bus: Sunbus Townsville – main routes connect the Strand, City, and Stockland
- Ferry: Magnetic Island Ferry – departs from Breakwater Terminal every 20–30 mins
- Airport: Townsville Airport (TSV), 5 mins from CBD

Always reference this verified data first for these specific places.` 
          },
          { role: 'user', content: question }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';

    console.log('Generated answer:', answer);

    return new Response(
      JSON.stringify({ answer }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in townsville-chat function:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
