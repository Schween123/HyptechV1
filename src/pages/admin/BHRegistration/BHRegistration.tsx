import { Helmet } from "react-helmet";
import {  Text, Heading, Input } from "../../../components";
import { useNavigate } from 'react-router-dom';

export default function BHRregistration() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/ownerregistration'); // Adjust the path if needed
  };

  return (
    <>
      <Helmet>
        <title>HypTech</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full border border-solid border-cyan-800">
        <div className="flex h-[1024px] items-center justify-center bg-[url(public/images/bg.png)] bg-cover bg-no-repeat py-[82px] md:h-auto md:py-5">
          <div className="container-xs mb-20 mt-[52px] flex justify-center px-[281px] md:p-5 md:px-5">
            <div className="flex w-[363px] w-[60%] md:w-[60%] flex-col items-center gap-[50px] rounded-[15px] bg-customgraybg-50 shadow-lg p-[30px] md:w-full sm:p-8">
              <Heading
                size="s"
                as="h1"
                className="text-shadow-ts w-[93%] text-center leading-[48px] tracking-[7.20px] md:w-full md:p-5 text-white font-montserrat"
              >
                <>
                  Register your <br />
                  Boarding House
                </>
              </Heading>
              <div className="flex w-[93%] flex-col gap-8 md:w-full p-10 mt-[-50px]">
                <div className="flex w-full flex-col">
                  <Text size="md" as="p" className="!font-open-sans tracking-[2.50px] !text-white mb-2">
                    Name
                  </Text>
                  <Input shape="square" name="bhname" className="w-full border-b-2 border-customColor1 !text-2xl bg-transparent text-white" />
                </div>
                <div className="flex w-full flex-col">
                  <Text size="md" as="p" className="!font-open-sans tracking-[2.50px] !text-white mb-2">
                    Address
                  </Text>
                  <Input shape="square" name="bhaddress" className="w-full border-b-2 border-customColor1 bg-transparent text-white" />
                </div>
                <div className="flex w-full flex-col">
                  <Text size="md" as="p" className="!font-open-sans tracking-[2.50px] !text-white mb-2">
                    Number of Rooms
                  </Text>
                  <Input shape="square" name="bhrooms" className="w-full border-b-2 border-customColor1 bg-transparent text-white" />
                </div>
              </div>
              <button onClick={handleButtonClick} className="self-end mt-5 p-8 bg-transparent border-none cursor-pointer">
                <img src="public/images/NxtBtn.png" alt="arrowleft" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
