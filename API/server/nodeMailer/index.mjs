import { transporter } from "./transporter/index.mjs";

const sendGenericEmail = async (emailCliente, corpoEmail, assuntoEmail) => {
  transporter
    .sendMail({
      text: corpoEmail,
      subject: assuntoEmail,
      from: "#GODev - HackaDev - KingsMan-Oficial",
      to: [emailCliente, "igoranjos.dev.teste@gmail.com"],
    })
    .then((Response) => console.log(Response))
    .catch((Error) => console.log(Error));
};

export const handleLauchEmail = (emailCliente, textoEmail, assuntoEmail) => {
  const result = sendGenericEmail(emailCliente, textoEmail, assuntoEmail)
    .then((response) => {
      console.log("sucesso");
    })
    .catch((err) => {
      throw new Error("Impossível enviar o email");
    });
};
