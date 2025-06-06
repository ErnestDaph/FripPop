import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <div className="max-w-screen-2xl mx-auto pt-20">
      <h1 className="text-5xl font-light text-center">Confirmation de commande</h1>
      <p className="text-center mt-5 text-lg">
        Merci pour votre commande ! Votre commande a été confirmée et sera traitée sous peu. Vous recevrez un e-mail de confirmation avec les détails de votre commande.
      </p>
      <Link
        to="/shop"
        className="text-white bg-secondaryBrown text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-[400px] mx-auto mt-5 h-12 flex items-center justify-center max-md:text-base"
      >
        Continuez votre shopping
      </Link>
      <Link
        to="/order-history"
        className="text-white bg-secondaryBrown text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-[400px] mx-auto mt-5 h-12 flex items-center justify-center max-md:text-base"
      >
        Voir l'historique des commandes
      </Link>
    </div>
  );
};
export default OrderConfirmation;
