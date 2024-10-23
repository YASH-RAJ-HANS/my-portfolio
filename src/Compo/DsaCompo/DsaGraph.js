import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components for Chart.js
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RatingGraph = () => {
  const [codeforcesId, setCodeforcesId] = useState('');
  const [codechefId, setCodechefId] = useState('');
  const [codeforcesData, setCodeforcesData] = useState([]);
  const [codechefData, setCodechefData] = useState([]); // Placeholder for now
  const [selectedPlatform, setSelectedPlatform] = useState('both'); // 'codeforces' | 'codechef' | 'both'

  // Fetch data for Codeforces
  const fetchCodeforcesData = async (id) => {
    try {
      const response = await axios.get(`https://codeforces.com/api/user.rating?handle=${id}`);
      const data = response.data.result.map((entry) => ({
        date: new Date(entry.ratingUpdateTimeSeconds * 1000).toLocaleDateString(),
        rating: entry.newRating,
      }));
      setCodeforcesData(data);
    } catch (error) {
      console.error('Error fetching Codeforces data:', error);
    }
  };

  // Placeholder function for CodeChef - needs proper API integration
  const fetchCodechefData = async (id) => {
    try {
      // API for CodeChef is restricted and requires OAuth, so use this as a placeholder
      // Replace with actual API call if you have access to OAuth token.
      const data = [
        { date: '2023-01-01', rating: 1500 }, // Replace this data with real fetched data
        { date: '2023-03-01', rating: 1600 },
        { date: '2023-05-01', rating: 1700 },
      ];
      setCodechefData(data);
    } catch (error) {
      console.error('Error fetching CodeChef data:', error);
    }
  };

  const handleFetchData = () => {
    if (codeforcesId) fetchCodeforcesData(codeforcesId);
    if (codechefId) fetchCodechefData(codechefId); // Placeholder for now
  };

  // Prepare data for the chart
  const graphData = {
    labels: [...new Set([...codeforcesData.map(d => d.date), ...codechefData.map(d => d.date)])], // Merge dates
    datasets: [
      selectedPlatform === 'codeforces' || selectedPlatform === 'both' ? {
        label: 'Codeforces Rating',
        data: codeforcesData.map(d => d.rating),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
      } : null,
      selectedPlatform === 'codechef' || selectedPlatform === 'both' ? {
        label: 'CodeChef Rating',
        data: codechefData.map(d => d.rating),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
      } : null,
    ].filter(Boolean),
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Rating: ${tooltipItem.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Rating',
        },
        beginAtZero: false,
      },
    },
  };

  return (
    <div>
      <h1>Competitive Programming Rating Graph</h1>
      <div>
        <input
          type="text"
          placeholder="Codeforces ID"
          value={codeforcesId}
          onChange={(e) => setCodeforcesId(e.target.value)}
        />
        <input
          type="text"
          placeholder="CodeChef ID"
          value={codechefId}
          onChange={(e) => setCodechefId(e.target.value)}
        />
        <button onClick={handleFetchData}>Fetch Data</button>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="both"
            checked={selectedPlatform === 'both'}
            onChange={() => setSelectedPlatform('both')}
          />
          Both
        </label>
        <label>
          <input
            type="radio"
            value="codeforces"
            checked={selectedPlatform === 'codeforces'}
            onChange={() => setSelectedPlatform('codeforces')}
          />
          Codeforces
        </label>
        <label>
          <input
            type="radio"
            value="codechef"
            checked={selectedPlatform === 'codechef'}
            onChange={() => setSelectedPlatform('codechef')}
          />
          CodeChef
        </label>
      </div>
      <Line data={graphData} options={chartOptions} />
    </div>
  );
};

export default RatingGraph;
