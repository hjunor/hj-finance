import React from "react";
import { Item } from "../../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as S from "./styles";
import yup from "../../helpers/yup";

type PropsFormArea = {
  onAdd: (item: Item) => void;
};

type SingInFormData = {
  date: Date;
  category: string;
  title: string;
  value: number;
};

const FormAddItem = yup.object().shape({
  date: yup.date().required("Data Obrigatório"),
  category: yup.string().required("Categoria é obrigatório"),
  title: yup.string().required("Tílulo é obrigatório"),
  value: yup.number().positive().integer().min(0).required(),
});
const FormArea: React.FC<PropsFormArea> = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormAddItem) });

  const handleAddItem: SubmitHandler<SingInFormData> = async (values: Item) => {
    if (Object.keys(errors).length === 0) {
      onAdd(values);
    }
    // console.log(values);
  };
  console.log(errors);
  return (
    <S.Container onSubmit={handleSubmit(handleAddItem)}>
      <S.WrapperInput>
        <label htmlFor="data">Data</label>
        <input {...register("date")} type="date" />
        <S.Error>{errors?.date?.message && errors.date.message}</S.Error>
      </S.WrapperInput>
      <S.WrapperInput>
        <label htmlFor="food">Categoria</label>
        <select id="food" {...register("category")} defaultValue="food">
          {}
          <option value="food">Alimentação</option>
          <option value="rent">Aluguel</option>
          <option value="salary">Sálario</option>
        </select>
        <S.Error>{errors?.food?.message && errors.food.message}</S.Error>
      </S.WrapperInput>
      <S.WrapperInput>
        <label htmlFor="title">Titulo</label>
        <input {...register("title")} id="title" type="text" />
        <S.Error>{errors?.title?.message && errors.title.message}</S.Error>
      </S.WrapperInput>
      <S.WrapperInput>
        <label htmlFor="money">Valor</label>
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
  );
};

export default FormArea;
