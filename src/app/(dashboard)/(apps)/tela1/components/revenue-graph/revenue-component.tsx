"use client";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import DashboardSelect from "@/src/components/dasboard-select";
import RevenueChart from "./revenue-chart";
import { useThemeStore } from "@/src/store";
import { useTheme } from "next-themes";
import { themes } from "@/src/config/thems";

const allUsersSeries = [
  {
    data: [90, 70, 85, 60, 80, 70, 90, 75, 60, 80],
  },
];

const RevenueComponent = () => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  const primary = `hsl(${
    theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
  })`;
  return (
    <Card className="h-full">
      <CardHeader className="border-none pb-0">
        <div className="flex items-center gap-2 flex-wrap ">
          <div className="flex-1">
            <div className="text-xl font-semibold text-default-900 whitespace-nowrap">
              Suas Receitas
            </div>
          </div>
          <div className="flex-none">
            <DashboardSelect />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-1 md:p-5">
        <RevenueChart series={allUsersSeries} chartColor={primary} />
      </CardContent>
    </Card>
  );
};

export default RevenueComponent;
