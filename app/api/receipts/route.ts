// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// // حدود مبدئية للحجم (10MB)
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export async function POST(req: NextRequest) {
//   try {
//     const formData = await req.formData();

//     const fullName = String(formData.get("fullName") || "");
//     const email = String(formData.get("email") || "");
//     const notes = String(formData.get("notes") || "");
//     const amount = String(formData.get("amount") || "");
//     const type = String(formData.get("type") || "");
//     const file = formData.get("receipt") as File | null;

//     if (!fullName || !email || !file) {
//       return NextResponse.json(
//         { error: "Missing required fields." },
//         { status: 400 }
//       );
//     }

//     if (file.size > 10 * 1024 * 1024) {
//       return NextResponse.json(
//         { error: "File too large (max 10MB)." },
//         { status: 400 }
//       );
//     }

//     const arrayBuffer = await file.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);

//     // إعدادات SMTP عبر متغيرات البيئة
//     // مثال: Mailtrap, SendGrid SMTP, أو حساب SMTP خاص بكم
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT || "587"),
//       secure: Boolean(process.env.SMTP_SECURE === "true"),
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     const toEmail = process.env.RECEIPTS_EMAIL_TO; // البريد الذي سيستقبل الإيصالات
//     if (!toEmail) {
//       return NextResponse.json(
//         { error: "Missing RECEIPTS_EMAIL_TO env." },
//         { status: 500 }
//       );
//     }

//     const info = await transporter.sendMail({
//       from: process.env.SMTP_FROM || `"Donations" <no-reply@yourdomain.org>`,
//       to: toEmail,
//       subject: `إيصال حوالة جديدة - ${fullName}`,
//       text: [
//         `الاسم: ${fullName}`,
//         `البريد: ${email}`,
//         `المبلغ: ${amount ? `$${amount}` : "غير محدد"}`,
//         `نوع التبرع: ${type || "غير محدد"}`,
//         `ملاحظات: ${notes || "-"}`,
//       ].join("\n"),
//       html: `
//         <div style="font-family:Arial,sans-serif;font-size:14px;color:#222">
//           <p><strong>الاسم:</strong> ${fullName}</p>
//           <p><strong>البريد:</strong> ${email}</p>
//           <p><strong>المبلغ:</strong> ${amount ? `$${amount}` : "غير محدد"}</p>
//           <p><strong>نوع التبرع:</strong> ${type || "غير محدد"}</p>
//           <p><strong>ملاحظات:</strong> ${notes || "-"}</p>
//         </div>
//       `,
//       attachments: [
//         {
//           filename: file.name,
//           content: buffer,
//           contentType: file.type || "application/octet-stream",
//         },
//       ],
//     });

//     return NextResponse.json({ ok: true, messageId: info.messageId });
//   } catch (err: any) {
//     console.error(err);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }
