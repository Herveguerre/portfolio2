import Hero from "@/components/Hero";
import Footer from "@/components/footer/Footer";
import NavBar_2 from "@/components/navigation/NavBar_2";
import React from "react";

export default function Contact() {
  return (
    <div>
      <NavBar_2 />
      <Hero />
      <form className="bg_section2 form">
        <div>
          <label for="nom">nom</label>
          <input type="text" id="nom" name="nom" required />
        </div>
        <div className="form_input">
          <label for="e-mail">e-mail</label>
          <input
            type="e-mail"
            id="e-mail"
            name="e-mail"
            placeholder="exemple@hotmail.fr"
            required
          />
        </div>
        <div className="form_input">
          <label for="phone">telephone</label>
          <input type="phone" id="phone" name="phone" placeholder="02355656" />
        </div>
        <div className="form_input">
          <label for="password">mot de passe </label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form_input">
          <label for="description">description</label>
          <textarea name="description" id="description"></textarea>
        </div>
        <div>
          <input
            type="submit"
            className="btn_submit"
            id="submit"
            value="valider"
          />
        </div>
      </form>
      <Footer />
    </div>
  );
}
