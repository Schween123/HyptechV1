import { Helmet } from "react-helmet";
import { Text, Img } from "../../../components";
import { Suspense } from "react";
import BoarderInfoAdmin from "../../../components/BoarderInfoAdmin/BoarderInfoAdmin";
import { totalAmount } from "../../../components/TotalAmount/TotalAmount";
import TotalAmount from "../../../components/TotalAmount/TotalAmount";

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


const boarderinfo: { boarder: string; duedate: string; dues: React.ReactElement; }[] = [
    { boarder: "Alice", duedate: "5 Jan 2024", dues: <TotalAmount total={totalAmount} /> },
    { boarder: "Bob", duedate: "10 Feb 2024", dues: <TotalAmount total={totalAmount} /> },
    { boarder: "Charlie", duedate: "15 Mar 2024", dues: <TotalAmount total={totalAmount} /> },
    { boarder: "David", duedate: "20 Apr 2024", dues: <TotalAmount total={totalAmount} /> },
   
  ];

export default function BoarderInfoPage() {
return (
<>
<Helmet>
<title>HypTech</title>
<meta name="description" content="Web site created using create-react-app" />
<style>{globalStyles}</style>
</Helmet>
<div className="w-full border border-solid border-white-A700">
<div className="flex flex-col items-center gap-5 bg-customgray4">
<div className="flex items-center gap-[7px] self-stretch bg-customcyan p-3.5">
<Img src="public/images/backbtn.png" alt="arrowleftshort" className="my-[26px] pl-5" />
<Text size="3xl" as="p" className="tracking-[4.50px] !text-white pl-5">
Room 1
</Text>
</div>
<div className="container-xs mb-[5px] md:p-2 ">
<div className="flex flex-col gap-4">

<Suspense fallback={<div>Loading feed...</div>}>
            {boarderinfo.map((info, index) => (
            <BoarderInfoAdmin
            key={"boaderinfo" + index}
            boarder={info.boarder}
            duedate={info.duedate}
            dues={info.dues}
          />
         ))}
    </Suspense>

</div>
</div>
</div>
</div>

</>
);
}