
import { Helmet } from "react-helmet";
import { Text } from "../../../components"; 
import  Header  from "../../../components/Header/Header.tsx"; 
import {Suspense } from "react";

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



const data = [

    { boarders: "BOARDERS" },
    { boarders: "PAID FOR <br/>THE MONTH"},
    { boarders: "NOT YET PAID FOR <br/>THE MONTH" },
];

export default function DashboardPage() {
    return (
        <>
    <Helmet>
    <title>HypTech</title>
    <meta name="description" content="Web site created using create-react-app" /> 
    <style>{globalStyles}</style>
    </Helmet>
    <div className="w-full border border-solid border-white-A700 ">
    <div className="flex flex-col items-center gap-[17px]  p-[7px]"> 
        <Header className="w-[93%] md:w-full md:gap-2.5" />
    <div className="mx-auto mb-[5px] flex w-full max-w-[1306px] flex-col items-center gap-[149px] md:gap-[111px] sm:gap-[74px]"> 
        <div className="flex flex-col items-start self-stretch pl-[40px]">
    <Text size="4xl" as="p" className="!font-opensans">
    Boarding House Name
    </Text>
    <Text as="p" className="!font-opensans !text-blue_gray-700">
    DASHBOARD
    </Text>
    </div>
    <div className="flex w-[92%] gap-[156px] md:w-full md:flex-col">
    <Suspense fallback={<div>Loading feed...</div>}>
    <div className="flex justify-center gap-40 mt-[-30px]">
        {data.map((d, index) => (
            <div
            key={"dashboard" + index}
            className="flex w-full flex-col items-center gap-[55px] rounded-[20px] bg-customdarkgray3 p-[7px] w-[287px] h-[270px] gap-[27px]"
            >
            <Text
                as="p"
                className="font-opensans text-white text-center pt-[10px]"
                dangerouslySetInnerHTML={{ __html: d.boarders }}
            />
            <Text size="5xl" as="p" className="mb-[62px] !font-opensans !text-white">
                00
            </Text>
            </div>
  ))}
  </div>
</Suspense>

    </div>
    </div>
    </div>
    </div>
    </>
    );
}