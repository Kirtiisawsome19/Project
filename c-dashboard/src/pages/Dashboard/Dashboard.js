import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./component/PortfolioSection";
import PriceSection from "./component/PriceSection";
import { GridItem, Grid } from "@chakra-ui/react";
import Transactions from "./component/Transactions";
import InfoCard from "./component/InfoCard";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        GridTemplateColumns={{
          base: "repeat(1,1fr)",
          xl: "repeat(2,1fr)",
        }}
        gap="6"
      >
        <GridItem colSpan={{
          base:1,
          xl:2,
        }}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>

        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/images/dot.svg" 
            text=" Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it"
            tagText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            inverted={true}
            tagText="Contact"
            imgUrl="/images/Square.svg"
            text="Learn more about our real estate, mortgage, and  corporate account services"
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
