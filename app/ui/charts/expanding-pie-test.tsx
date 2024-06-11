import React, { useState } from 'react';
import { ResponsivePie  } from '@nivo/pie'; // Assuming Tremor uses Nivo internally

interface DonutChartProps {
  data: { id: string; value: number }[];
}

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
  return (
    <div>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8} // This expands the active slice
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        activeId={"Slice 1"}
        onClick={(node, event) => {
          console.log(node);
        }}
      />
    </div>
  );
};

export default DonutChart;
