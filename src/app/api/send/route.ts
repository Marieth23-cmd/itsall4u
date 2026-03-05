import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request:Request) {
    const apikey="re_BWyqwWH2_PJHjVtvz7aV21udz4ieHUsuR";
    const contact = "mariethpascoal7@gmail.com";

    if (!apikey) {
        console.error('API key is not configured.');
        return NextResponse.json({ error: 'API key is not configured.' }, { status: 500 });
    }
    if (!contact) {
        console.error('Contact email is not configured.');
        return NextResponse.json({ error: 'Contact email is not configured.' }, { status: 500 });
    }

try {
  console.log("Enviando email para:", contact);

  const resend = new Resend(apikey);
  const body = await request.json();

  console.log("Dados recebidos no backend:", body);

  const { name, email, company, message, servico } = body;

  if (!name || !email || !company || !message || !servico) {
    return NextResponse.json(
      { error: "Dados incompletos. Por favor, preencha todos os campos." },
      { status: 400 }
    );
  }

  console.log("Dados completos, preparando email...");

  const emailContent = `
    <h1>Novo contato de ${name}</h1>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Empresa:</strong> ${company}</p>
    <p><strong>Serviço de interesse:</strong> ${servico}</p>
    <p><strong>Mensagem:</strong><br/> ${message}</p>
  `;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: contact,
    subject: "Novo contacto pelo site itsall4u",
    html: emailContent,
  });

  console.log("Email enviado com sucesso!");

  return NextResponse.json({ success: true });

} catch (error) {
  console.error("Erro ao enviar email:", error);
  return NextResponse.json(
    { error: "Erro ao enviar email." },
    { status: 500 }
  );
}




}