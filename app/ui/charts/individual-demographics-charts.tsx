import { ResponsivePie } from '@nivo/pie';

const genderDataPlaceholder = [
  {
    id: "Male",
    value: 500
  },
  {
    id: "Female",
    value: 548
  }
]

const ethnicityDataPlaceholder = [
  {
    id: 'White',
    value: 358
  },
  {
    id: 'Hispanic',
    value: 300
  },
  {
    id: 'Other POC',
    value: 390
  }
]

const englishLearnerDataPlaceholder = [
  {
    id: "ELL",
    value: 800
  },
  {
    id: "Not ELL",
    value: 248
  }
]

export function DonutChartGender({selectedSlice}: {selectedSlice: string}) {

  const colors = ['#f87171', '#a5f3fc']
  return (
    <ResponsivePie
      data={genderDataPlaceholder}
      margin={{ top: 0, right: 90, bottom: 0, left: 90 }}
      innerRadius={0.6}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={18} // This expands the active slice
      colors={({ id }) => {
        const index = genderDataPlaceholder.findIndex(d => d.id === id);
        return colors[index % colors.length];
      }}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
      activeId={selectedSlice}
      onClick={(node, event) => {
        console.log(node);
      }}
    />
  )
}

export function DonutChartEthnicity({selectedSlice}: {selectedSlice: string}) {
  const colors = ['#f87171', '#a5f3fc', '#4ade80']
  
  return (

    <ResponsivePie
    data={ethnicityDataPlaceholder}
    margin={{ top: 0, right: 90, bottom: 0, left: 90 }}
    innerRadius={0.6}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={18} // This expands the active slice
    colors={({ id }) => {
      const index = ethnicityDataPlaceholder.findIndex(d => d.id === id);
      return colors[index % colors.length];
    }}
    borderWidth={1}
    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
    activeId={selectedSlice}
    onClick={(node, event) => {
      console.log(node);
    }}
  />
  )
}

export function DonutChartEnglishLearner({selectedSlice}: {selectedSlice: string}) {
  const colors = ['#4ade80', '#a3a3a3']
  
  return (

    <ResponsivePie
      data={englishLearnerDataPlaceholder}
      margin={{ top: 0, right: 90, bottom: 0, left: 90 }}
      innerRadius={0.6}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={18} // This expands the active slice
      colors={({ id }) => {
        const index = englishLearnerDataPlaceholder.findIndex(d => d.id === id);
        return colors[index % colors.length];
      }}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
      activeId={selectedSlice}
      onClick={(node, event) => {
        console.log(node);
      }}
    />
  )
}

