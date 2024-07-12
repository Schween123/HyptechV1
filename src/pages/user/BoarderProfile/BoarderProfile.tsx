import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../../components";
import TotalAmount from "../../../components/TotalAmount/TotalAmount";
import { totalAmount } from "../../../components/TotalAmount/TotalAmount";
import { useNavigate } from 'react-router-dom';

const globalStyles = `
  body, html {
    background-color: #C5C3C6; 
    height: 100%;
    margin: 0;
  }
  #root, .app {
    height: 100%;
  }
`;

export default function BoarderProfilePage() {
  const navigate = useNavigate();

  const handleMyBillClick = () => {
    navigate('/billdetails');
  };

  const handleTransactionsClick = () => {
    navigate('/transactions');
  };
  const handlePayNowClick = () => {
    navigate('/paynow');
  };

return (
<>
<Helmet>
<title>HypTech</title>
<meta name="description" content="Web site created using create-react-app" />
<style>{globalStyles}</style>
</Helmet>
<div className="w-full border border-solid border-white-A700 pb-[195px] md:pb-5">
<div className="flex flex-col items-center">
<div className="flex h-[630px] items-start self-stretch bg-[url(/public/images/BoarderProfilebg.svg)] bg-cover bg-no-repeat p-[50px] md:h-auto">
<div className="mb-[243px] ml-[15px] flex w-[63%] flex-col items-start gap-[54px] md:ml-0 md:w-full sm:gap-[27px]">
<div className="flex flex-col items-start">
<Heading as="h1" className="!font-semibold tracking-[4.50px] !text-white">
Boarder's Name
</Heading>
<Text size="2xl" as="p" className="!font-montserrat tracking-[4.00px] !text-gray-300">
Room 1
</Text>
</div>
<div className="flex w-[44%] flex-col items-center self-end md:w-full">
<div className="flex flex-wrap items-center justify-center gap-5 self-stretch">
<Heading size="lg" as="h2" className="!font-semibold tracking-[5.00px] !text-white">
₱
</Heading>
<Heading size="xl" as="h3" className="!font-semibold tracking-[7.00px] !text-white">
<TotalAmount total={totalAmount} />
</Heading>
</div>
<Text size="xl" as="p" className="!font-montserrat tracking-[3.50px] !text-gray-300">
Due
</Text>
</div>
</div>
</div>
<div className="container relative mt-[-197px] px-[187px] md:p-5 md:px-5 max-w-[900px] h-[396px] mx-auto">
<div className="flex flex-col items-center gap-[53px] border-[5px] border-solid border-gray-400 bg-gray-300 p-[39px] shadow-lg sm:gap-[26px] sm:p-5">
<div className="self-stretch pt-4">
<div className="flex flex-col gap-[21px]">
<div className="flex items-start justify-between gap-5 md:flex-col">
<div className="flex w-[55%] flex-col gap-[38px] md:w-full">
  <div className="flex w-full items-center justify-between">
    <div className="flex items-center gap-1">
      <Text as="p" className="!font-montserrat tracking-[3.00px] !text-customdarkgray2">
        Next Bill
      </Text>
      <Text size="xl" as="p" className="!font-montserrat !font-medium tracking-[3.50px] !text-cyan-800 ml-2">
        ₱ <TotalAmount total={totalAmount} />
      </Text>
    </div>
    <Button onClick={handlePayNowClick}
      size="md"
      shape="round"
      className=" min-w-[228px] font-montserrat font-semibold md:text-[38px] sm:px-5 sm:text-4x1 bg-customcyan !text-white float-right"
    >
      Pay Now
    </Button>
  </div>
  <div className="flex w-full items-center justify-between">
    <div className="flex items-center gap-1">
      <Text as="p" className="!font-montserrat tracking-[3.00px] !text-customdarkgray2">
        Due Date
      </Text>
      <Text size="xl" as="p" className="!font-montserrat !font-medium tracking-[3.50px] ml-2 !text-customdarkgray2">
        Next Bill
      </Text>
    </div>
  </div>
</div>


</div>
<div className="h-[2px] bg-cyan-800" />
<div></div>
<div className="flex justify-center w-full">
    <div className="flex justify-between items-center gap-[100px]">
        <button onClick={handleMyBillClick} className="flex items-center gap-5 p-0 border-none bg-transparent cursor-pointer">
                        <Img src="public/images/mybillbtn.png" alt="image" />
                        <Text size="xl" as="p" className="mb-[22px] !font-montserrat !font-medium !text-customdarkgray2">
                          My Bill
                        </Text>
                        <Img src="public/images/greaterthan_cyan.png" alt="arrowright" className="mb-[26px]" />
                      </button>
                      <button onClick={handleTransactionsClick} className="flex items-center gap-5 p-0 border-none bg-transparent cursor-pointer">
                        <Img src="public/images/transactionsbtn.png" alt="image" />
                        <Text size="xl" as="p" className="mb-[22px] !font-montserrat !font-medium !text-customdarkgray2">
                          Transactions
                        </Text>
                        <Img src="public/images/greaterthan_cyan.png" alt="arrowright" className="mb-[26px]" />
                      </button>
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</>
);
};