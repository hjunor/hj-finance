import { Item } from "../../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as S from "./styles";
import yup from "../../helpers/yup";
import { getCurrentDate } from "../../helpers/dateFilter";
import { useUser } from "../../hook/useUser";
import { useStore } from "../../hook/useStore";

type PropsFormArea = {
  onAdd: (item: Item) => void;
  setActiveFormModal: (value: boolean) => void;
  isActiveFormModal: boolean;
};

type SingInFormData = {
  date: Date;
  category: string;
  title: string;
  value: number;
};

export const FormAddItem = yup.object().shape({
  date: yup
    .date()
    .typeError("O campo deve ser preenchido.")
    .required("Data Obrigatório"),
  category: yup.string().required("Categoria é obrigatório"),
  title: yup.string().required("Tílulo é obrigatório"),
  value: yup
    .number()
    .typeError("Esse campo só aceita tipo numérico.")
    .positive()
    .integer()
    .min(0)
    .required(),
});
export const FormArea = ({
  onAdd,
  setActiveFormModal,
  isActiveFormModal,
}: PropsFormArea) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormAddItem) });
  const { userData } = useUser();
  const { addStore } = useStore();
  function handleOutsideClick(event: any) {
    if (event.target === event.currentTarget) {
      setActiveFormModal(false);
    }
  }

  const handleAddItem: SubmitHandler<SingInFormData> = async (values: Item) => {
    if (Object.keys(errors).length === 0) {
      await addStore(
        "money",
        {
          date: new Date(values.date).toISOString(),
          title: values.title,
          value: values.value,
          category: values.category,
        },
        userData?.uid
      );
      reset();
      setActiveFormModal(false);
    }
  };
  if (isActiveFormModal) {
    return (
      <S.Overlay onClick={handleOutsideClick}>
        <S.Container onSubmit={handleSubmit(handleAddItem)}>
          <S.WrapperInput>
            <label htmlFor="data">Data</label>
            <input
              {...register("date", { value: getCurrentDate() })}
              type="date"
            />
            <S.Error>{errors?.date?.message && errors.date.message}</S.Error>
          </S.WrapperInput>
          <S.WrapperInput>
            <label htmlFor="food">Categoria</label>
            <select id="food" {...register("category")} defaultValue="food">
              <option value="food">Alimentação</option>
              <option value="rent">Aluguel</option>
              <option value="salary">Sálario</option>
              <option value="purchases">Compras</option>
            </select>
            <S.Error>{errors?.food?.message && errors.food.message}</S.Error>
          </S.WrapperInput>
          <S.WrapperInput>
            <label htmlFor="title">Titulo</label>
            <input {...register("title")} id="title" type="text" />
            <S.Error>{errors?.title?.message && errors.title.message}</S.Error>
          </S.WrapperInput>
          <S.WrapperInput>
            <label htmlFor="money">Valor </label>
            <input {...register("value")} id="money" type="text" />
            <S.Error>{errors?.value?.message && errors.value.message}</S.Error>
          </S.WrapperInput>
          <button
            type="submit"
            disabled={
              !!errors["date"] ||
              !!errors["food"] ||
              !!errors["title"] ||
              !!errors["value"] ||
              !(Object.keys(errors).length === 0)
                ? true
                : false
            }
          >
            Adicionar
          </button>
        </S.Container>
      </S.Overlay>
    );
  } else {
    return <div></div>;
  }
};
