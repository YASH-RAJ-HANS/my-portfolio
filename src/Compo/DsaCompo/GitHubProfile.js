import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const GitHubProfile = ({ username }) => {
  const [profileData, setProfileData] = useState({});
  const [repos, setRepos] = useState([]);
  const [contributionData, setContributionData] = useState([]);
  const [commitActivity, setCommitActivity] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const profileResponse = await axios.get(`https://api.github.com/users/${username}`);
        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`);

        // Profile data
        setProfileData(profileResponse.data);
        setRepos(reposResponse.data);

        // Fetch commit activity
        const commitActivityResponse = await axios.get(`https://api.github.com/users/${username}/events`);
        const commitCounts = commitActivityResponse.data.map(event => event.created_at);
        setCommitActivity(commitCounts);

        // Simulated contribution data (for visualization)
        setContributionData(generateRandomData());
      } catch (err) {
        setError('Error fetching GitHub data');
      }
    };

    fetchGitHubData();
  }, [username]);

  const generateRandomData = () => {
    const days = [];
    const contributions = [];
    for (let i = 0; i < 30; i++) {
      days.push(`Day ${i + 1}`);
      contributions.push(Math.floor(Math.random() * 20));
    }
    return { days, contributions };
  };

  // Commit activity chart data
  const commitChartData = {
    labels: contributionData.days,
    datasets: [
      {
        label: 'Commit Activity',
        data: contributionData.contributions,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      {error && <p className="text-red-500">{error}</p>}

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <img
          className="w-32 h-32 rounded-full mb-4"
          src={profileData.avatar_url}
          alt={profileData.login}
        />
        <h1 className="text-3xl font-semibold">{profileData.name || profileData.login}</h1>
        <p className="text-gray-600 mt-2">{profileData.bio}</p>
        <div className="flex space-x-4 mt-4">
          <p className="text-gray-700 font-medium">Followers: {profileData.followers}</p>
          <p className="text-gray-700 font-medium">Following: {profileData.following}</p>
        </div>
      </div>

      {/* Repo Stats Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Top Repositories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.slice(0, 4).map(repo => (
            <div
              key={repo.id}
              className="bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium text-blue-500"
              >
                {repo.name}
              </a>
              <p className="text-gray-600 mt-2">{repo.description || "No description"}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Commit Activity Chart Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Commit Activity (Last 30 Days)</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <Line data={commitChartData} />
        </div>
      </div>
    </div>
  );
};

export default GitHubProfile;
