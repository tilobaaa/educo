import React from 'react'

const data = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [
      {
        label: 'Sales',
        data: [400, 300, 500],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

const ActivityBar = () => {
  return (
    <div>
      <Bar data={data}/>
    </div>
  )
}

export default ActivityBar
