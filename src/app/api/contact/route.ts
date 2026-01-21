import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { NextRequest, NextResponse } from "next/server";

const sesClient = new SESClient({
  region: process.env.AWS_REGION || "ap-southeast-2",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const {
      name,
      email,
      phone,
      location,
      "ndis-status": ndisStatus,
      "support-type": supportType,
      "previous-coordinator": previousCoordinator,
      "current-challenge": currentChallenge,
      message,
      "preferred-time": preferredTime,
      leadQuality,
      leadScore,
    } = data;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL || "info@properaccess.au";
    const fromEmail = process.env.SES_FROM_EMAIL || "noreply@properaccess.au";

    // Format NDIS status
    const ndisStatusLabels: Record<string, string> = {
      "yes-plan": "Yes, has active NDIS plan",
      "approved-no-plan": "Approved but needs help creating plan",
      "applying": "Currently applying for NDIS",
      "not-yet": "Not yet, exploring options",
    };

    // Format support type
    const supportTypeLabels: Record<string, string> = {
      "support-coordination": "Support Coordination",
      "specialist-coordination": "Specialist Support Coordination",
      "plan-management": "Plan Management",
      "not-sure": "Not sure - needs guidance",
    };

    // Format previous coordinator
    const previousCoordinatorLabels: Record<string, string> = {
      "no": "No, first time",
      "yes-switching": "Yes, looking to switch coordinators",
      "yes-additional": "Yes, but needs additional support",
    };

    // Format urgency
    const urgencyLabels: Record<string, string> = {
      "urgent": "As soon as possible",
      "soon": "Within the next few weeks",
      "planning": "Just planning ahead",
    };

    // Format preferred time
    const preferredTimeLabels: Record<string, string> = {
      "morning": "Morning (9am - 12pm)",
      "afternoon": "Afternoon (12pm - 5pm)",
      "evening": "Evening (5pm - 7pm)",
    };

    const emailParams = {
      Source: fromEmail,
      Destination: {
        ToAddresses: [toEmail],
      },
      Message: {
        Subject: {
          Data: `New Contact Form Submission from ${name}${leadQuality ? ` [${leadQuality} Priority]` : ""}`,
          Charset: "UTF-8",
        },
        Body: {
          Html: {
            Data: `
              <h2>New Contact Form Submission</h2>
              ${leadQuality ? `<p><strong style="color: ${leadQuality === "High" ? "#22c55e" : leadQuality === "Medium" ? "#f59e0b" : "#6b7280"};">Lead Quality: ${leadQuality}</strong> (Score: ${leadScore})</p>` : ""}

              <h3>Contact Information</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Location:</strong> ${location || "Not provided"}</p>

              <h3>NDIS Information</h3>
              <p><strong>NDIS Status:</strong> ${ndisStatusLabels[ndisStatus] || ndisStatus || "Not provided"}</p>
              <p><strong>Support Type Needed:</strong> ${supportTypeLabels[supportType] || supportType || "Not provided"}</p>
              <p><strong>Previous Coordinator:</strong> ${previousCoordinatorLabels[previousCoordinator] || previousCoordinator || "Not provided"}</p>
              <p><strong>Urgency:</strong> ${urgencyLabels[currentChallenge] || currentChallenge || "Not provided"}</p>

              <h3>Contact Preferences</h3>
              <p><strong>Preferred Call Time:</strong> ${preferredTimeLabels[preferredTime] || preferredTime || "Not provided"}</p>

              ${message ? `<h3>Additional Message</h3><p>${message.replace(/\n/g, "<br>")}</p>` : ""}
            `,
            Charset: "UTF-8",
          },
          Text: {
            Data: `
New Contact Form Submission
${leadQuality ? `Lead Quality: ${leadQuality} (Score: ${leadScore})` : ""}

CONTACT INFORMATION
-------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Location: ${location || "Not provided"}

NDIS INFORMATION
----------------
NDIS Status: ${ndisStatusLabels[ndisStatus] || ndisStatus || "Not provided"}
Support Type Needed: ${supportTypeLabels[supportType] || supportType || "Not provided"}
Previous Coordinator: ${previousCoordinatorLabels[previousCoordinator] || previousCoordinator || "Not provided"}
Urgency: ${urgencyLabels[currentChallenge] || currentChallenge || "Not provided"}

CONTACT PREFERENCES
-------------------
Preferred Call Time: ${preferredTimeLabels[preferredTime] || preferredTime || "Not provided"}

${message ? `ADDITIONAL MESSAGE\n------------------\n${message}` : ""}
            `,
            Charset: "UTF-8",
          },
        },
      },
      ReplyToAddresses: [email],
    };

    const command = new SendEmailCommand(emailParams);
    await sesClient.send(command);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
