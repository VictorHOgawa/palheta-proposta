import { morbidityStaticData } from "@/src/@staticData/morbidity";
import { CardWithIcon } from "@/src/components/cards/CardWithIcon";
import DoubleBarChart from "@/src/components/charts/DoubleBarChart";
import GaugeChart from "@/src/components/charts/GaugeChart";
import ChartWithTable from "@/src/components/charts/chartWithTable";
import { Docs } from "@/src/components/svg";

export function LethalityTabContent() {
  return (
    <div className="grid mt-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 grid gap-4 ">
          <div className="flex flex-col w-full  gap-4">
            <CardWithIcon
              id={1}
              name={"Total Project"}
              count={"1206"}
              rate={"8.2"}
              icon={<Docs className="w-6 h-6 text-primary" />}
              color={"primary"}
            />
            <CardWithIcon
              id={1}
              name={"Total Project"}
              count={"1206"}
              rate={"8.2"}
              icon={<Docs className="w-6 h-6 text-primary" />}
              color={"primary"}
            />
            <GaugeChart />
          </div>
        </div>
        <div className="col-span-8">
          <ChartWithTable
            title="Morbidade Média por Mês"
            subtitle="Últimos 12 Meses"
            chartTitle="Meses"
            chartData={morbidityStaticData.chartData}
            tableData={morbidityStaticData.tableData}
          />
        </div>
      </div>
    </div>
  );
}
