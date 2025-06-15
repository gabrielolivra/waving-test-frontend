import { useApiFunction } from "@/app/hooks/useApiFunction";
import { apiPostCreateItem } from "@/app/lib/services/api/item/item";
import Input from "@/app/ui/components/input";
import Modal from "@/app/ui/components/modal";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface ModalItemProps {
  isOpen: boolean;
  closeModal: () => void;
  onConfirm: ()=> void;
}

type FormValues = {
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
};

export default function ModalItems({ isOpen, closeModal, onConfirm}: ModalItemProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const { callApi, isLoading, data, error, isFinish } = useApiFunction(apiPostCreateItem);

  const handlerCreate: SubmitHandler<FormValues> = async (data) => {
    await callApi(data);
  };

  useEffect(() => {
    if (isLoading) return
    if (data && isFinish) {
      toast.success('Item criado com sucesso!', {
        autoClose: 3000,
      })
      reset();
      onConfirm();
      return
    }
    if (error && isFinish) {
      console.log(JSON.stringify(error))
      toast.error('erro ao criar item')
      return
    }
  }, [data, isLoading, isFinish, error])
  return (
    <Modal
      title="Adicionar novo item"
      type="success"
      isOpen={isOpen}
      onCancel={closeModal}
      onConfirm={handleSubmit(handlerCreate)}
    >
      <form className="w-[400px] p-2">
        <div>
          <Input
            label="Nome do item"
            type="text"
            {...register("name", { required: "Nome é obrigatório" })}
          />
          {errors.name?.message && <p className="text-red-500">Nome é obrigatorio</p>}
        </div>

        <div>
          <Input
            label="Descrição do item"
            type="text"
            {...register("description", { required: "Descrição é obrigatória" })}
          />
          {
            errors.description?.message && <p className="text-red-500">Descrição é obrigatória</p>
          }
        </div>

        <div>
          <Input
            label="Preço"
            type="number"
            step="0.01"
            {...register("price", { required: "Preço é obrigatório", valueAsNumber: true })}
          />
          {
            errors.price?.message && <p className="text-red-500">O preço é obrigatório</p>
          }
        </div>

        <div>
          <Input
            label="Quantidade de estoque"
            type="number"
            {...register("stockQuantity", {
              required: "Quantidade é obrigatória",
              valueAsNumber: true,
            })}
          />
          {errors.stockQuantity?.message && <p className="text-red-500">A quantidade é obrigatória</p>}
        </div>

      </form>
    </Modal>
  );
}
