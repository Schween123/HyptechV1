// src/components/CashPaymentModal.tsx
import { FC } from "react";
import { Text, Img } from "../../components";

interface CashPaymentModalProps {
  onClose: () => void;
}

const CashPaymentModal: FC<CashPaymentModalProps> = ({ onClose }) => {


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-[400px] h-[300px] border-3 border-customcyan">
        <button onClick={onClose} className="absolute top-2 right-2">
          <Img src="public/images/exit.png" alt="Close" className="w-[15px] h-[15px]" />
        </button>
        <Text size="md" as="p" className="mb-4 text-center font-montserrat">
          Please Insert a Peso Bill in the Bill Acceptor
        </Text>
        <Text size="3xl" as="p" className="text-center mb-4 mt-10 text-customcyan font-montserrat">
          ₱ 000.00
        </Text>
        <Text size="xs" as="p" className="text-center mt-12 text-customgray4 font-open-sans">
          Note: Please do not insert crumpled and torn money
        </Text>
       
      </div>
    </div>
  );
};

export default CashPaymentModal;
