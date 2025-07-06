import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
const ChangeUsername = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function handleClick() {
    if (!name) return;
    dispatch(updateName(name));
    setIsOpenForm(false);
  }

  return !isOpenForm ? (
    <p
      className="cursor-pointer text-sm text-blue-500 hover:text-blue-600 hover:underline"
      onClick={() => setIsOpenForm((e) => !e)}
    >
      Isminde bir yanlışlık mı var?
    </p>
  ) : (
    <>
      <input
        type="text"
        className="mx-auto my-4 block rounded-2xl bg-stone-200 px-2 py-1"
        placeholder="Yeni isim"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="small" onClick={handleClick}>
        Onayla
      </Button>
      <p
        className="mt-2 cursor-pointer text-sm text-blue-500 hover:text-blue-600 hover:underline"
        onClick={() => setIsOpenForm(false)}
      >
        Iptal et
      </p>
    </>
  );
};

export default ChangeUsername;
