"use client";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import {toast , ToastContainer} from "react-toastify";
import { useTranslations } from "next-intl";


export default function Email() {

  const t = useTranslations("Email")
    
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form=e.currentTarget as HTMLFormElement;
    const data={
      company:(form.elements.namedItem("company") as HTMLInputElement)?.value,
      email:(form.elements.namedItem("email") as HTMLInputElement)?.value,
      message:(form.elements.namedItem("message") as HTMLInputElement)?.value,
      name:(form.elements.namedItem("name") as HTMLInputElement)?.value,
      servico:(form.elements.namedItem("servico") as HTMLInputElement)?.value,
    }

    const res=await fetch("/api/send",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    });
    if(res.ok){
      toast.success("Email enviado com sucesso!");
      form.reset();
    }else{
      toast.error("Erro ao enviar email. Por favor, tente novamente.");
    }
  }



  return (
    <div className="bg-[#F8F7F4]">
      <Header />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
     
      <div className="pt-36 pb-16 px-6 max-w-7xl mx-auto">

        <section className="grid grid-cols-1 lg:grid-cols-2 ">

          {/* LADO ESQUERDO - INFORMAÇÕES */}
          <div className="flex flex-col justify-center">

            <h1 className="text-2xl lg:text-3xl font-medium leading-tight text-black mb-6">
              {t("h1")} 
              <span className="block text-yellow-500">
                {t("span")}
              </span>
            </h1>

            <div className="w-16 h-[3px] bg-yellow-500 mb-8"></div>

            <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-12 max-w-md">
              {t("paragrafo")}
            </p>

            <div className="space-y-4 text-gray-700">
              <p><span className="font-medium">{t("telefone")}:</span> + (244) 930 611 983</p>
              <p><span className="font-medium">{t("email")}:</span> geral@itsall4u.ao</p>
              <p>
                <span className="font-medium">{t("localizacao")}:
                    </span> Zamba 2  Bairro Azul Rua do Banco BFA
              </p>
            </div>

          </div>

          {/* LADO DIREITO - FORMULÁRIO */}
          <form onSubmit={handleSubmit} className="bg-white border border-black/5 rounded-2xl p-12 shadow-[0_30px_70px_rgba(0,0,0,0.06)]">

            <h2 className="text-2xl lg:text-3xl font-medium mb-10 text-black">
              {t("form.h2")}
            </h2>

            <div className="flex flex-col gap-2">

              <input
                name="name"
                id="name"
                type="text"
                placeholder={t("form.name")}
                className="border-b border-black/30 py-4 outline-none
                focus:border-[#C6A75E] transition-colors duration-300
                placeholder:text-gray-500 text-gray-800"
              />

              <input
                id="email"
               name="email"  
                type="email"
                placeholder={t("form.email")}
                className="border-b border-black/30 py-4 outline-none
                focus:border-[#C6A75E] transition-colors duration-300
                placeholder:text-gray-500 text-gray-800"
              />

              <input
                 id="company"
                 name="company"
                type="text"
                placeholder={t("form.Company")}
                className="border-b border-black/30 py-4 outline-none
                focus:border-[#C6A75E] transition-colors duration-300
                placeholder:text-gray-500 text-gray-800"
              />

              <select
                name="servico"
                id="servico"
                className="border-b border-black/30 py-4 bg-transparent
                text-gray-800 outline-none
                focus:border-[#C6A75E] transition-colors duration-300"
              >
                <option value="" disabled className="text-gray-500">
                  {t("Select.option")}
                </option>
                <option className="text-gray-900">{t("Select.option1")}</option>
                <option className="text-gray-900">{t("Select.option2")}</option>
                <option className="text-gray-900">{t("Select.option3")}</option>
                <option className="text-gray-900">{t("Select.option4")}</option>
                <option className="text-gray-900">{t("Select.option5")}</option>
                <option className="text-gray-900">{t("Select.option6")}</option>
                <option className="text-gray-900">{t("Select.option7")}</option>
                <option className="text-gray-900">{t("Select.option8")}</option>
              </select>

              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder={t("form.message")}
                className="border-b border-black/30 py-4 outline-none resize-none
                focus:border-[#C6A75E] transition-colors duration-300
                placeholder:text-gray-500 text-gray-800"
              />

              <button
                type="submit"
                className="mt-10 px-10 py-4 rounded-full
                bg-black text-white font-medium tracking-wide
                transition-all duration-300
                hover:bg-yellow-500 hover:text-black"
              >
                {t("button")}
              </button>

            </div>
          </form>

        </section>

      </div>

      <Footer />
    </div>
  );
}