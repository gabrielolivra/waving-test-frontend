import { useApiFunction } from "@/app/hooks/useApiFunction";
import Input from "@/app/ui/components/input";
import Modal from "@/app/ui/components/modal";
import { SubmitHandler, useForm } from "react-hook-form";

interface ModalItemProps {
  isOpen: boolean;
  closeModal: () => void;
}

type FormValues = {
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
};

export default function ModalItems({ isOpen, closeModal }: ModalItemProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const { callApi, isLoading } = useApiFunction(); 

  const handlerCreate: SubmitHandler<FormValues> = async (data) => {
    await callApi(data); 
    reset();
    closeModal(); 
  };

  return (
    <Modal
      title="Adicionar novo item"
      type="success"
      isOpen={isOpen}
      onCancel={closeModal}
      onConfirm={handleSubmit(handlerCreate)} // importante: vincula o handleSubmit aqui
    >
      <form className="w-[400px] p-2">
        <div>
          <Input
            label="Nome do item"
            type="text"
            {...register("name", { required: "Nome é obrigatório" })}
          />
          {errors.name?.message && <p>Nome é obrigatorio</p>}
        </div>

        <div>
          <Input
            label="Descrição do item"
            type="text"
            {...register("description", { required: "Descrição é obrigatória" })}
          />
          {
            errors.description?.message && <p>Descrição é obrigatória</p>
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
            errors.price?.message && <p>O preço é obrigatório</p>
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
          {errors.stockQuantity?.message && <p>A quantidade é obrigatória</p>}
        </div>

      </form>
    </Modal>
  );
}
