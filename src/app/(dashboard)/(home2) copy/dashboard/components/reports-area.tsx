"use client";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { cn } from "@/src/lib/utils";
import { Icon } from "@iconify/react";
import { Cup, Eye, Increase, Session } from "@/src/components/svg";
import { Calendar, FormInput } from "lucide-react";

const ReportsArea = () => {
  const reports = [
    {
      id: 1,
      name: "Vacinas Aplicadas",
      count: "6.132",
      rate: "150",
      isUp: true,
      icon: <Session className="h-4 w-4" />,
      color: "blue-500",
    },
    {
      id: 2,
      name: "Tarefas",
      count: "11.236",
      rate: "202",
      isUp: false,
      icon: <Eye className="h-4 w-4" />,
      color: "#826AF9",
    },
    {
      id: 3,
      name: "Visitas Técnicas",
      count: "460",
      rate: "22",
      isUp: true,
      icon: <Increase className="h-4 w-4" />,
      color: "warning",
    },
    {
      id: 4,
      name: "Novos Clientes",
      count: "360",
      rate: "30",
      isUp: false,
      icon: <Cup className="h-4 w-4" />,
      color: "destructive",
    },
    {
      id: 5,
      name: "Formulários",
      count: "620",
      rate: "30",
      isUp: false,
      icon: <FormInput className="h-4 w-4" />,
      color: "info",
    },
    {
      id: 6,
      name: "Compromissos",
      count: "168",
      rate: "30",
      isUp: false,
      icon: <Calendar className="h-4 w-4" />,
      color: "success",
    },
  ];
  return (
    <>
      {reports.map((item, index) => (
        <Card className="w-full" key={`report-card-${index}`}>
          <CardHeader className="flex-col-reverse sm:flex-row flex-wrap gap-2  border-none mb-0 pb-0">
            <span className="text-sm font-medium text-default-900 flex-1">
              {item.name}
            </span>
            <span
              className={cn(
                "flex-none h-9 w-9 flex justify-center items-center bg-default-100 rounded-full",
                {
                  "bg-blue-500 bg-opacity-10 text-primary":
                    item.color === "blue-500",
                  "bg-[#826AF9] bg-opacity-10 text-info":
                    item.color === "#826AF9",
                  "bg-warning bg-opacity-10 text-warning":
                    item.color === "warning",
                  "bg-destructive bg-opacity-10 text-destructive":
                    item.color === "destructive",
                  "bg-success bg-opacity-10 text-success":
                    item.color === "success",
                  "bg-info bg-opacity-10 text-info": item.color === "info",
                }
              )}
            >
              {item.icon}
            </span>
          </CardHeader>
          <CardContent className="pb-4 flex w-full items-center justify-between px-4">
            <div className="text-2xl font-semibold text-default-900 mb-2.5">
              {item.count}
            </div>
            <div className="flex items-center font-semibold gap-1">
              {item.isUp ? (
                <>
                  <span className="text-success">{item.rate}%</span>
                  <Icon
                    icon="heroicons:arrow-trending-up-16-solid"
                    className="text-success text-xl"
                  />
                </>
              ) : (
                <>
                  <span className="text-destructive">{item.rate}</span>
                  <Icon
                    icon="heroicons:arrow-trending-down-16-solid"
                    className="text-destructive text-xl"
                  />
                </>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default ReportsArea;
