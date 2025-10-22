import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  type: "enquiry" | "contact";
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, phone, message, type }: ContactRequest = await req.json();

    console.log("Sending email:", { name, email, type });

    const emailSubject = type === "enquiry" 
      ? `New Enquiry from ${name}`
      : `New Contact Request from ${email}`;

    const emailBody = type === "enquiry"
      ? `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
      : `
        <h2>New Contact Request</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>User has requested to be contacted.</p>
      `;

    const { error } = await resend.emails.send({
      from: "GOLDEX Website <noreply@goldexspimex.ru>",
      to: ["info@goldexspimex.ru"],
      subject: emailSubject,
      replyTo: email,
      html: emailBody,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error(`Resend API error: ${error.message}`);
    }

    console.log("Email sent successfully");

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
