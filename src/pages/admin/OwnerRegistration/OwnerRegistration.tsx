import { Helmet } from "react-helmet";
import { Text, Heading, Img, Input } from "../../../components";
import { useNavigate } from 'react-router-dom';

export default function OwnerRegistration() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/bhinfo'); // Adjust the path if needed
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
            <div className="flex w-[363px] md:w-[90%] flex-col items-center gap-[50px] rounded-[15px] bg-customgraybg-50 shadow-lg p-[30px] md:w-full sm:p-8">
              <div className="flex flex-col items-center gap-[46px] rounded-[15px] bg-gray-800_7f p-7 sm:p-5">
                <Heading as="h1" className="text-shadow-ts mt-[10px] tracking-[9.00px] !text-white">
                  Owner's profile
                </Heading>
                <div className="flex md:flex-row flex-col items-start md:justify-between">
                  {/* Left section */}
                  <div className="mt-[33px] flex w-[33%] flex-col items-center gap-8 md:w-auto md:mr-36">
                    <Img 
                      src="public/images/face_holder.png" 
                      alt="faceholder" 
                      className="" 
                    />
                    <div className="flex justify-center bg-blue_gray-100 p-4 w-[79%] md:w-auto">
                      <Img 
                        src="public/images/fingerprint_holder.png" 
                        alt="fingerprint" 
                        className="" 
                      />
                    </div>
                  </div>

                  {/* Right section */}
                  <div className="flex flex-col items-end">
                    <div className="flex flex-col items-start self-stretch">
                      <Text size="md" as="p" className="!font-open-sans tracking-[2.50px] !text-white">
                        First Name
                      </Text>
                      <Input shape="square" name="ownerfirstname" className="!text-white w-[400px] border-b-2 border-customColor1 !text-xl pb-[-25px] pt-[25px] mt-[-17px]" />
                    </div>
                    <div className="mt-[58px] flex flex-col items-start self-stretch">
                      <Text size="md" as="p" className="!font-open-sans tracking-[2.50px] !text-white">
                        Last Name
                      </Text>
                      <Input shape="square" name="ownerlastname" className="!text-white w-[400px] border-b-2 border-customColor1 !text-xl pb-[-25px] pt-[25px] mt-[-17px]" />
                    </div>
                    <div className="mt-[58px] flex flex-col items-start self-stretch">
                      <Text size="md" as="p" className="!font-open-sans tracking-[2.50px] !text-white">
                        Address
                      </Text>
                      <Input shape="square" name="owneraddress" className="!text-white w-[400px] border-b-2 border-customColor1 !text-xl pb-[-25px] pt-[25px] mt-[-17px]" />
                    </div>
                    <div className="mt-[58px] flex flex-col items-start self-stretch">
                      <Text size="md" as="p" className="!font-open-sans tracking-[2.50px] !text-white">
                        Contact Number
                      </Text>
                      <Input shape="square" name="ownercontact" className="!text-white w-[400px] border-b-2 border-customColor1 !text-xl pb-[-25px] pt-[25px] mt-[-17px]" />
                    </div>
                    <div className="mt-[30px] flex justify-end w-[54%] md:mr-0">
                      <button onClick={handleButtonClick} className="bg-transparent border-none cursor-pointer">
                        <img src="public/images/NxtBtn.png" alt="arrowleft" />
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
}
