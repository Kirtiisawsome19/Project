import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { IoMdMail } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import InfoCard from "../Dashboard/component/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout>
     <Stack spacing="80px">
     <SupportCard
        icon={IoMdMail}
        leftComponent={<ContactCard />}
        title="Contact Us "
        text="          Have a question or just want to know more? Feel free to reach out to us
"
      />
       <SupportCard
        icon={AiFillMessage}
        leftComponent={< InfoCard
          inverted={true}
          tagText="Contact"
          imgUrl="/images/Square.svg"
          text="Learn more about our real estate, mortgage, and  corporate account services"
        
        />}
        title="Live Chat"
        text="Dont have time to wait for the answer,Chat with us now"
      />
     </Stack>
    </DashboardLayout>
  );
};

export default Support;
