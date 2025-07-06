import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Ana menüye dön</LinkButton>

      <p className="mt-7 font-semibold">
        Sepetin hala boş. Haydi biraz pizza ekle :)
      </p>
    </div>
  );
}

export default EmptyCart;
